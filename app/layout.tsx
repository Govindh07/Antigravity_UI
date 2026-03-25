import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Premium Furniture | E-Commerce",
  description: "A futuristic premium furniture shopping experience",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body className="min-h-screen w-full flex flex-col bg-dash-bg text-dash-text antialiased selection:bg-dash-accent selection:text-black">
        {children}
      </body>
    </html>
  );
}
