import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "More Than Payments",
  description: "UK & Ireland payment specialists",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const navItems = [
    { label: "About Us", href: "/about" },
    { label: "Solutions & Partners", href: "/solutions-partners" },
    { label: "How We Can Help", href: "/how-we-can-help" },
  ];

  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          backgroundColor: "#f5f7fb",
          color: "#0f172a",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <header
          style={{
            position: "sticky",
            top: 0,
            zIndex: 30,
            borderBottom: "1px solid #e2e8f0",
            backgroundColor: "rgba(255,255,255,0.96)",
          }}
        >
          <div
            style={{
              maxWidth: "1280px",
              margin: "0 auto",
              padding: "10px 28px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "16px",
            }}
          >
            <Link
              href="/"
              style={{
                display: "flex",
                alignItems: "center",
                textDecoration: "none",
                color: "inherit",
                flexShrink: 0,
              }}
            >
              <Image
                src="/logo.png"
                alt="More Than Payments"
                width={540}
                height={120}
                style={{
                  width: "200px",
                  height: "auto",
                  display: "block",
                }}
                priority
              />
            </Link>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "16px",
                marginLeft: "auto",
                marginRight: "16px",
                flexWrap: "wrap",
              }}
            >
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  style={{
                    fontSize: "14px",
                    fontWeight: 700,
                    color: "#334155",
                    textDecoration: "none",
                    whiteSpace: "nowrap",
                  }}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <Link
              href="/contact"
              style={{
                display: "inline-block",
                padding: "12px 18px",
                borderRadius: "18px",
                backgroundColor: "#020617",
                color: "#fff",
                fontWeight: 700,
                textDecoration: "none",
                whiteSpace: "nowrap",
              }}
            >
              Contact
            </Link>
          </div>
        </header>

        {children}
      </body>
    </html>
  );
}
