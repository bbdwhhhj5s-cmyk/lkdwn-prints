import type { Artwork } from "@/data/catalog";
import type { FrameId, PrintSizeId } from "@/lib/store";

const gelatoApiBaseUrl = "https://order.gelatoapis.com/v4";

export type GelatoOrderType = "draft" | "order";

export type GelatoOrderItem = {
  itemReferenceId: string;
  productUid: string;
  files: Array<{ type: "default"; url: string }>;
  quantity: number;
};

export type GelatoShippingAddress = {
  firstName: string;
  lastName: string;
  companyName?: string;
  addressLine1: string;
  addressLine2?: string;
  city: string;
  state?: string;
  postCode: string;
  country: string;
  email: string;
  phone?: string;
};

export type GelatoOrderRequest = {
  orderType: GelatoOrderType;
  orderReferenceId: string;
  customerReferenceId: string;
  currency: "GBP";
  items: GelatoOrderItem[];
  shippingAddress: GelatoShippingAddress;
  shipmentMethodUid: "normal";
  metadata: Array<{ key: string; value: string }>;
};

export type GelatoOrder = {
  id: string;
  orderReferenceId: string;
  fulfillmentStatus: string;
  financialStatus: string;
};

type GelatoSearchResponse = {
  orders: GelatoOrder[];
};

function getApiKey() {
  const apiKey = process.env.GELATO_API_KEY;

  if (!apiKey) {
    throw new Error("GELATO_API_KEY is not configured.");
  }

  return apiKey;
}

async function gelatoRequest<T>(path: string, body: unknown): Promise<T> {
  const response = await fetch(`${gelatoApiBaseUrl}${path}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-API-KEY": getApiKey(),
    },
    body: JSON.stringify(body),
    signal: AbortSignal.timeout(20_000),
  });

  const responseBody = (await response.json().catch(() => null)) as
    | { message?: string }
    | null;

  if (!response.ok) {
    throw new Error(
      `Gelato request failed (${response.status}): ${
        responseBody?.message ?? "No error message returned."
      }`,
    );
  }

  return responseBody as T;
}

export function getGelatoOrderType(): GelatoOrderType {
  return process.env.GELATO_ORDER_TYPE === "order" ? "order" : "draft";
}

export function getGelatoProductUid(
  artwork: Artwork,
  size: PrintSizeId,
  frame: FrameId,
) {
  let mappings: Record<string, string>;

  try {
    mappings = JSON.parse(process.env.GELATO_PRODUCT_UIDS ?? "{}");
  } catch {
    throw new Error("GELATO_PRODUCT_UIDS must be valid JSON.");
  }

  const mappingKey = `${artwork.orientation}:${size}:${frame}`;
  const productUid = mappings[mappingKey];

  if (!productUid) {
    throw new Error(`No Gelato product UID is configured for ${mappingKey}.`);
  }

  return productUid;
}

export function getGelatoPrintFileUrl(artwork: Artwork) {
  const baseUrl =
    process.env.GELATO_PRINT_FILE_BASE_URL ??
    process.env.NEXT_PUBLIC_SITE_URL ??
    "https://www.lkdwnprints.co.uk";
  const url = new URL(artwork.image, baseUrl);

  if (url.protocol !== "https:") {
    throw new Error("Gelato print files must use public HTTPS URLs.");
  }

  return url.toString();
}

export async function findGelatoOrder(orderReferenceId: string) {
  const result = await gelatoRequest<GelatoSearchResponse>("/orders:search", {
    orderReferenceId,
    limit: 1,
  });

  return result.orders[0] ?? null;
}

export const createGelatoOrder = (order: GelatoOrderRequest) =>
  gelatoRequest<GelatoOrder>("/orders", order);
