import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";

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
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://lkdwnprints.com",
  ),
  title: {
    default: "LKDWN Prints",
    template: "%s | LKDWN Prints",
  },
  description: "Museum-quality fine art photography across Scotland and Europe.",
  applicationName: "LKDWN Prints",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "LKDWN Prints",
    description:
      "Museum-quality fine art photography across Scotland and Europe.",
    type: "website",
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
      className={`${cormorant.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}
