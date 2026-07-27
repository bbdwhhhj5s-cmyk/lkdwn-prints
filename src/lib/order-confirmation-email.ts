import Stripe from "stripe";
import { parseCartMetadata } from "@/lib/checkout-metadata";
import { formatPrice, getFrame, getPrintSize, getUnitPrice } from "@/lib/store";

const resendEndpoint = "https://api.resend.com/emails";
const defaultReplyTo = "john@lkdwnprints.co.uk";

export type OrderConfirmationEmailStatus =
  | "disabled"
  | "payment_pending"
  | "sent";

const escapeHtml = (value: string) =>
  value.replace(
    /[&<>"']/g,
    (character) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#039;",
      })[character]!,
  );

const getCustomerName = (session: Stripe.Checkout.Session) =>
  session.collected_information?.shipping_details?.name ??
  session.customer_details?.name ??
  "there";

const getCustomerEmail = (session: Stripe.Checkout.Session) =>
  session.customer_details?.email ??
  (typeof session.customer_email === "string"
    ? session.customer_email
    : null);

const getFirstName = (name: string) => name.trim().split(/\s+/)[0] || "there";

function buildItemRows(session: Stripe.Checkout.Session) {
  return parseCartMetadata(session.metadata).map((item) => {
    const size = getPrintSize(item.size)!;
    const frame = getFrame(item.frame)!;
    const lineTotal = getUnitPrice(item.size, item.frame) * item.quantity;

    return {
      title: item.title,
      details: `${size.label} (${size.dimensions}) · ${frame.label}`,
      quantity: item.quantity,
      lineTotal,
    };
  });
}

function buildHtml(session: Stripe.Checkout.Session) {
  const name = getCustomerName(session);
  const firstName = getFirstName(name);
  const items = buildItemRows(session);
  const total = session.amount_total ?? 0;
  const itemRows = items
    .map(
      (item) => `
        <tr>
          <td style="padding:18px 0;border-bottom:1px solid #24333d;">
            <div style="font-size:16px;color:#f7f4ee;">${escapeHtml(item.title)} × ${item.quantity}</div>
            <div style="margin-top:5px;font-size:13px;line-height:1.5;color:#9aa5ad;">${escapeHtml(item.details)}</div>
          </td>
          <td style="padding:18px 0;border-bottom:1px solid #24333d;text-align:right;vertical-align:top;font-size:16px;color:#f7f4ee;white-space:nowrap;">
            ${escapeHtml(formatPrice(item.lineTotal))}
          </td>
        </tr>`,
    )
    .join("");

  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <title>Order confirmed</title>
  </head>
  <body style="margin:0;background:#06131d;color:#f7f4ee;font-family:Arial,Helvetica,sans-serif;">
    <div style="display:none;max-height:0;overflow:hidden;">Your LKDWN Prints order is confirmed.</div>
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#06131d;">
      <tr>
        <td align="center" style="padding:40px 18px;">
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:620px;border:1px solid #2b3942;">
            <tr>
              <td style="padding:42px 46px 18px;">
                <div style="font-size:18px;font-weight:700;letter-spacing:4px;color:#f7f4ee;">LKDWN <span style="font-weight:400;color:#d9b568;">PRINTS</span></div>
              </td>
            </tr>
            <tr>
              <td style="padding:18px 46px 46px;">
                <div style="font-size:12px;letter-spacing:4px;text-transform:uppercase;color:#d9b568;">Order confirmed</div>
                <h1 style="margin:18px 0 18px;font-family:Georgia,'Times New Roman',serif;font-size:46px;line-height:1.05;font-weight:400;color:#f7f4ee;">Thank you, ${escapeHtml(firstName)}.</h1>
                <p style="margin:0 0 28px;font-size:16px;line-height:1.7;color:#aab3b9;">
                  Your payment has been received and your artwork is being prepared for production. We’ll email you again when it is on its way.
                </p>
                <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                  ${itemRows}
                  <tr>
                    <td style="padding:20px 0 0;font-size:16px;color:#f7f4ee;">Total paid</td>
                    <td style="padding:20px 0 0;text-align:right;font-size:18px;color:#f7f4ee;">${escapeHtml(formatPrice(total))}</td>
                  </tr>
                </table>
                <div style="margin-top:34px;padding-top:24px;border-top:1px solid #24333d;">
                  <p style="margin:0 0 8px;font-size:14px;line-height:1.6;color:#aab3b9;">Tracked UK delivery is normally 5–10 business days.</p>
                  <p style="margin:0;font-size:13px;line-height:1.6;color:#74828b;">Order reference: ${escapeHtml(session.id)}</p>
                </div>
              </td>
            </tr>
            <tr>
              <td style="padding:24px 46px;background:#0a1923;font-size:13px;line-height:1.7;color:#82909a;">
                All photographs by John McHugh · Glasgow, Scotland<br>
                Questions? Reply to this email or contact <a href="mailto:${defaultReplyTo}" style="color:#d9b568;text-decoration:none;">${defaultReplyTo}</a>.
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

function buildText(session: Stripe.Checkout.Session) {
  const firstName = getFirstName(getCustomerName(session));
  const items = buildItemRows(session);
  const itemLines = items
    .map(
      (item) =>
        `${item.title} × ${item.quantity}\n${item.details}\n${formatPrice(item.lineTotal)}`,
    )
    .join("\n\n");

  return `LKDWN PRINTS

ORDER CONFIRMED

Thank you, ${firstName}.

Your payment has been received and your artwork is being prepared for production. We’ll email you again when it is on its way.

${itemLines}

Total paid: ${formatPrice(session.amount_total ?? 0)}

Tracked UK delivery is normally 5–10 business days.
Order reference: ${session.id}

All photographs by John McHugh · Glasgow, Scotland
Questions? Reply to this email or contact ${defaultReplyTo}.`;
}

export async function sendOrderConfirmationEmail(
  stripe: Stripe,
  sessionId: string,
): Promise<OrderConfirmationEmailStatus> {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.ORDER_CONFIRMATION_FROM;

  if (!apiKey || !from) {
    return "disabled";
  }

  const session = await stripe.checkout.sessions.retrieve(sessionId);

  if (session.payment_status !== "paid") {
    return "payment_pending";
  }

  const to = getCustomerEmail(session);

  if (!to) {
    throw new Error("Stripe did not return a customer email address.");
  }

  const response = await fetch(resendEndpoint, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
      "Idempotency-Key": `order-confirmation-${session.id}`,
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: process.env.ORDER_CONFIRMATION_REPLY_TO ?? defaultReplyTo,
      subject: "Order confirmed — LKDWN Prints",
      html: buildHtml(session),
      text: buildText(session),
    }),
  });

  if (!response.ok) {
    throw new Error(`Email provider request failed (${response.status}).`);
  }

  return "sent";
}
