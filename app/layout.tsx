import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "More Than Payments | Payment Solutions for UK & Ireland Businesses",
  description:
    "More Than Payments helps businesses across the UK and Ireland review payment costs, improve cashflow, and find the right card and payment solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}