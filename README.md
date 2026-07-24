# LKDWN Prints

Fine art photography catalogue and storefront built with Next.js.

## Local development

Copy `.env.example` to `.env.local`, set `STRIPE_SECRET_KEY` to a Stripe test
secret key, then install and run the project:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in a browser.

The catalogue and cart work without Stripe credentials. Creating a Checkout
Session requires `STRIPE_SECRET_KEY`. Stripe-hosted Checkout collects the UK
shipping address and returns completed payments to `/order-confirmation`.

## Verification

```bash
npm run lint
npm run build
```
