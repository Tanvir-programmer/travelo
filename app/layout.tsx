import type { Metadata } from "next";
import { Montserrat, Inter, Damion } from "next/font/google"; // 1. Added Damion here
import "./globals.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer";

import NextAuthProvider from "./provider/NextAuthProvider";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

// 2. Configure the script font for the "Backpack" style
const damion = Damion({
  variable: "--font-damion",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Travelo Book Your next Trip",
  description:
    "Discover hidden gems and plan your perfect trip with AI-powered insights.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <NextAuthProvider>
      <html lang="en" data-theme="light">
        <body
          // 3. Added damion.variable to the className list
          className={`${montserrat.variable} ${inter.variable} ${damion.variable} font-sans antialiased`}
        >
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </body>
      </html>
    </NextAuthProvider>
  );
}
