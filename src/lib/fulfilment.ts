import Stripe from "stripe";
import { getArtwork } from "@/data/catalog";
import { parseCartMetadata } from "@/lib/checkout-metadata";
import {
  createGelatoOrder,
  findGelatoOrder,
  getGelatoOrderType,
  getGelatoPrintFileUrl,
  getGelatoProductUid,
  type GelatoOrder,
  type GelatoShippingAddress,
} from "@/lib/gelato";

function splitRecipientName(name: string) {
  const parts = name.trim().split(/\s+/);

  if (parts.length === 1) {
    return { firstName: parts[0], lastName: "-" };
  }

  return {
    firstName: parts.slice(0, -1).join(" "),
    lastName: parts.at(-1)!,
  };
}

function getShippingAddress(
  session: Stripe.Checkout.Session,
): GelatoShippingAddress {
  const shipping = session.collected_information?.shipping_details;
  const customer = session.customer_details;
  const address = shipping?.address;
  const email = customer?.email;

  if (
    !shipping?.name ||
    !address?.line1 ||
    !address.city ||
    !address.postal_code ||
    !address.country ||
    !email
  ) {
    throw new Error("Stripe did not return a complete shipping address.");
  }

  const { firstName, lastName } = splitRecipientName(shipping.name);

  return {
    firstName,
    lastName,
    ...(customer.business_name
      ? { companyName: customer.business_name }
      : {}),
    addressLine1: address.line1,
    ...(address.line2 ? { addressLine2: address.line2 } : {}),
    city: address.city,
    ...(address.state ? { state: address.state } : {}),
    postCode: address.postal_code,
    country: address.country,
    email,
    ...(customer.phone ? { phone: customer.phone } : {}),
  };
}

export async function fulfilStripeSession(
  stripe: Stripe,
  sessionId: string,
): Promise<GelatoOrder | null> {
  const session = await stripe.checkout.sessions.retrieve(sessionId);

  if (session.payment_status !== "paid") {
    return null;
  }

  if (session.metadata.gelato_order_id) {
    return {
      id: session.metadata.gelato_order_id,
      orderReferenceId: session.id,
      fulfillmentStatus: session.metadata.gelato_fulfillment_status ?? "created",
      financialStatus: session.metadata.gelato_financial_status ?? "pending",
    };
  }

  const existingOrder = await findGelatoOrder(session.id);

  if (existingOrder) {
    await recordGelatoOrder(stripe, session.id, existingOrder);
    return existingOrder;
  }

  const cart = parseCartMetadata(session.metadata);

  if (cart.length === 0) {
    throw new Error("Stripe order contains no fulfilment items.");
  }

  const order = await createGelatoOrder({
    orderType: getGelatoOrderType(),
    orderReferenceId: session.id,
    customerReferenceId:
      typeof session.customer === "string" ? session.customer : session.id,
    currency: "GBP",
    shipmentMethodUid: "normal",
    shippingAddress: getShippingAddress(session),
    items: cart.map((item, index) => {
      const artwork = getArtwork(item.artworkSlug)!;

      return {
        itemReferenceId: `${session.id}-${index + 1}`,
        productUid: getGelatoProductUid(artwork, item.size, item.frame),
        files: [{ type: "default", url: getGelatoPrintFileUrl(artwork) }],
        quantity: item.quantity,
      };
    }),
    metadata: [
      { key: "stripe_checkout_session", value: session.id },
      { key: "store", value: "LKDWN Prints" },
    ],
  });

  await recordGelatoOrder(stripe, session.id, order);
  return order;
}

async function recordGelatoOrder(
  stripe: Stripe,
  sessionId: string,
  order: GelatoOrder,
) {
  await stripe.checkout.sessions.update(sessionId, {
    metadata: {
      gelato_order_id: order.id,
      gelato_fulfillment_status: order.fulfillmentStatus,
      gelato_financial_status: order.financialStatus,
    },
  });
}
