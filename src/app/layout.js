import "./globals.css";

import { Manrope, Cormorant_Garamond } from "next/font/google";

import Header from "@/components/layout/Header";

const bodyFont = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
});

const headingFont = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "LKDWN Prints",
  description: "Fine Art Photography",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${bodyFont.variable} ${headingFont.variable} antialiased`}
      >
        <Header />

        <main className="pt-20">
          {children}
        </main>
      </body>
    </html>
  );
}