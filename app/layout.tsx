import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    template: "%s | All the billionaries",
    default: "All the billionaries",
  },
  description: "All the billionaries",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-black font-sans text-white text-lg pt-36">
        {children}
      </body>
    </html>
  );
}
