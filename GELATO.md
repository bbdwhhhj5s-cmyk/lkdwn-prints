# Gelato fulfilment

LKDWN Prints transfers paid Stripe Checkout orders to Gelato through the
server-only webhook at:

`https://www.lkdwnprints.co.uk/api/webhooks/stripe`

The integration uses Gelato Orders API v4. It is disabled unless
`GELATO_ENABLED=true` and defaults to creating Gelato **draft** orders.

## Safety model

- Stripe webhook signatures are verified before any order is processed.
- Only paid Checkout Sessions are eligible for fulfilment.
- Cart data is recorded by the server in Stripe metadata and validated again
  before it is sent to Gelato.
- The Stripe Checkout Session ID is the Gelato `orderReferenceId`.
- Gelato is searched by that reference before creating an order, preventing
  duplicate fulfilment when Stripe retries a webhook.
- The Gelato order ID and status are written back to Stripe metadata.
- API keys are server-only environment variables and must never be committed.

## Required Vercel variables

Copy the Gelato and Stripe webhook variables from `.env.example` into the
Vercel Production environment.

`GELATO_PRODUCT_UIDS` maps the store variants using this key format:

`orientation:size:frame`

Example:

`landscape:a2:black`

The mapping must use the exact Product UIDs supplied by Gelato for fine-art
posters and framed posters. A0 framed variants are intentionally omitted
because the storefront does not offer them.

## Print files

Each catalogue artwork image is sent as a public HTTPS print-file URL. Before
enabling live fulfilment, verify every source file in Gelato for:

- final crop and orientation;
- sufficient resolution at A2, A1 and A0;
- colour profile;
- bleed or border handling;
- frame and paper compatibility.

If production masters are hosted separately, set
`GELATO_PRINT_FILE_BASE_URL` to their HTTPS origin while preserving the same
paths as the catalogue images.

## Stripe webhook setup

In Stripe Workbench, create a webhook endpoint for:

`https://www.lkdwnprints.co.uk/api/webhooks/stripe`

Subscribe to:

- `checkout.session.completed`
- `checkout.session.async_payment_succeeded`

Copy its `whsec_...` signing secret into `STRIPE_WEBHOOK_SECRET` in Vercel.

The restricted Stripe key needs permission to create, retrieve and update
Checkout Sessions. Updating is required so the Gelato order ID can be recorded
after a successful transfer.

## Launch sequence

1. Configure a Gelato API key and all Product UID mappings.
2. Leave `GELATO_ORDER_TYPE=draft`.
3. Set `GELATO_ENABLED=true` and redeploy.
4. Complete one Stripe test payment.
5. Confirm exactly one correctly configured draft appears in Gelato.
6. Inspect its product, crop, print file, address and shipping method.
7. Repeat with portrait, landscape, framed and unframed variants.
8. Only after those checks, set `GELATO_ORDER_TYPE=order`.

Changing `GELATO_ORDER_TYPE` to `order` sends paid orders directly into Gelato
production and charges the payment method configured in Gelato.
