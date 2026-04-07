import type { Metadata } from "next";
import { Montserrat, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Providers from "./components/Providers";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Soulfood | Handcrafted Silver Accessories",
  description:
    "Explore our collection of handcrafted sterling silver jewelry — necklaces, bracelets, earrings, and rings made with love.",
  openGraph: {
    title: "Soulfood | Handcrafted Silver Accessories",
    description:
      "Explore our collection of handcrafted sterling silver jewelry — necklaces, bracelets, earrings, and rings made with love.",
    type: "website",
    locale: "en_CA",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${cormorant.variable} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
