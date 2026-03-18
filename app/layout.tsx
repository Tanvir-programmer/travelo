import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google"; // Professional pairing
import "./globals.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer";

// 1. Heading Font: Montserrat for that "Adventure" feel
const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

// 2. Body Font: Inter for clean, readable booking details
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Travelo | Your AI Travel Companion",
  description: "Discover hidden gems and plan your perfect trip with AI-powered insights.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light"> 
      {/* data-theme helps daisyUI stay consistent */}
      <body
        className={`${montserrat.variable} ${inter.variable} font-sans antialiased`}
      >
        {/* The wrapper below ensures the footer stays at the bottom */}
        <div className="flex flex-col min-h-screen">
          <Header />
          
          {/* Main content expands to fill available space */}
          <main className="flex-grow">
            {children}
          </main>
          
          <Footer />
        </div>
      </body>
    </html>
  );
}