import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import CartProvider from "@/components/cart/CartProvider";
import Footer from "@/components/layout/Footer";
import JsonLd from "@/components/seo/JsonLd";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://lkdwnprints.com";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500"],
  variable: "--font-heading",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata = {
  metadataBase: new URL(
    siteUrl,
  ),
  title: {
    default: "LKDWN Prints",
    template: "%s | LKDWN Prints",
  },
  description: "Museum-quality fine art photography across Scotland and Europe.",
  keywords: [
    "fine art photography",
    "photography prints",
    "Scottish landscape photography",
    "European photography",
    "museum-quality prints",
    "John McHugh photographer",
  ],
  applicationName: "LKDWN Prints",
  authors: [{ name: "John McHugh", url: siteUrl }],
  creator: "John McHugh",
  publisher: "LKDWN Prints",
  category: "Fine art photography",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "LKDWN Prints",
    description:
      "Museum-quality fine art photography across Scotland and Europe.",
    type: "website",
    siteName: "LKDWN Prints",
    locale: "en_GB",
    url: "/",
    images: [
      {
        url: "/images/hero/Hero.jpg",
        alt: "LKDWN Prints landscape photography",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LKDWN Prints",
    description:
      "Museum-quality fine art photography across Scotland and Europe.",
    images: ["/images/hero/Hero.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${cormorant.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <JsonLd
          data={[
            {
              "@context": "https://schema.org",
              "@type": "WebSite",
              "@id": `${siteUrl}/#website`,
              url: siteUrl,
              name: "LKDWN Prints",
              description:
                "Museum-quality fine art photography across Scotland and Europe.",
              inLanguage: "en-GB",
            },
            {
              "@context": "https://schema.org",
              "@type": "Person",
              "@id": `${siteUrl}/#john-mchugh`,
              name: "John McHugh",
              url: siteUrl,
              homeLocation: {
                "@type": "City",
                name: "Glasgow",
              },
              jobTitle: "Fine art photographer",
              description:
                "Glasgow-based fine art photographer and retired graphic designer.",
            },
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "@id": `${siteUrl}/#organization`,
              name: "LKDWN Prints",
              url: siteUrl,
              email: "john@lkdwnprints.co.uk",
              founder: {
                "@id": `${siteUrl}/#john-mchugh`,
              },
            },
          ]}
        />
        <CartProvider>
          {children}
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
