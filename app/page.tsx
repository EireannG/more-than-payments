import Image from "next/image";
import type { CSSProperties } from "react";

export default function MoreThanPaymentsHomepage() {
  const navItems = [
    { label: "About Us", href: "/about" },
    { label: "Solutions & Partners", href: "/solutions-partners" },
    { label: "How We Can Help", href: "/how-we-can-help" },
  ];

  const styles: Record<string, CSSProperties> = {
    page: {
      minHeight: "100vh",
      backgroundColor: "#f5f7fb",
      color: "#0f172a",
      fontFamily: "Arial, sans-serif",
    },
    header: {
      position: "sticky",
      top: 0,
      zIndex: 30,
      borderBottom: "1px solid #e2e8f0",
      backgroundColor: "rgba(255,255,255,0.95)",
    },
    container: {
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "0 24px",
    },
    headerInner: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "18px 0",
      gap: "20px",
      flexWrap: "wrap",
    },
    brand: {
      display: "flex",
      alignItems: "center",
      textDecoration: "none",
      color: "inherit",
    },
    nav: {
      display: "flex",
      alignItems: "center",
      gap: "22px",
      flexWrap: "wrap",
    },
    navLink: {
      fontSize: "15px",
      fontWeight: 700,
      color: "#334155",
      textDecoration: "none",
    },
    hero: {
      backgroundColor: "#fff",
      borderBottom: "1px solid #e2e8f0",
    },
    heroGrid: {
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "72px 24px",
      display: "grid",
      gridTemplateColumns: "1.15fr 0.85fr",
      gap: "48px",
      alignItems: "start",
    },
    pill: {
      display: "inline-block",
      padding: "12px 18px",
      borderRadius: "999px",
      backgroundColor: "#e2e8f0",
      fontSize: "12px",
      fontWeight: 800,
      letterSpacing: "0.14em",
      textTransform: "uppercase",
      color: "#334155",
      marginBottom: "24px",
    },
    h1: {
      fontSize: "64px",
      lineHeight: 0.95,
      letterSpacing: "-0.04em",
      fontWeight: 900,
      margin: 0,
      color: "#020617",
    },
    lead: {
      marginTop: "24px",
      fontSize: "22px",
      lineHeight: 1.6,
      color: "#475569",
      maxWidth: "760px",
    },
    buttonRow: {
      display: "flex",
      gap: "16px",
      flexWrap: "wrap",
      marginTop: "36px",
    },
    primaryBtn: {
      display: "inline-block",
      padding: "16px 24px",
      borderRadius: "18px",
      backgroundColor: "#020617",
      color: "#fff",
      fontWeight: 700,
      textDecoration: "none",
    },
    secondaryBtn: {
      display: "inline-block",
      padding: "16px 24px",
      borderRadius: "18px",
      backgroundColor: "#fff",
      color: "#0f172a",
      fontWeight: 700,
      textDecoration: "none",
      border: "1px solid #cbd5e1",
    },
    card: {
      border: "1px solid #e2e8f0",
      borderRadius: "28px",
      backgroundColor: "#f8fafc",
      padding: "32px",
      boxShadow: "0 8px 24px rgba(15,23,42,0.05)",
    },
    sectionLabel: {
      fontSize: "12px",
      fontWeight: 800,
      letterSpacing: "0.14em",
      textTransform: "uppercase",
      color: "#64748b",
    },
    smallText: {
      marginTop: "16px",
      fontSize: "17px",
      lineHeight: 1.7,
      color: "#475569",
    },
  };

  return (
    <main style={styles.page}>
      <header style={styles.header}>
        <div style={{ ...styles.container, ...styles.headerInner }}>
          <a href="/" style={styles.brand}>
            <Image
              src="/logo.png"
              alt="More Than Payments"
              width={540}
              height={120}
              style={{
                width: "340px",
                height: "auto",
                display: "block",
              }}
              priority
            />
          </a>

          <nav style={styles.nav}>
            {navItems.map((item) => (
              <a key={item.label} href={item.href} style={styles.navLink}>
                {item.label}
              </a>
            ))}
          </nav>

          <a href="/contact" style={styles.primaryBtn}>
            Contact
          </a>
        </div>
      </header>

      <section style={styles.hero}>
        <div style={styles.heroGrid}>
          <div>
            <div style={styles.pill}>UK &amp; Ireland Payment Specialists</div>
            <h1 style={styles.h1}>Smarter payment solutions for growing businesses.</h1>
            <p style={styles.lead}>
              We help businesses reduce payment costs, improve cashflow, and choose the
              right card and payment setup for how they actually trade.
            </p>
            <div style={styles.buttonRow}>
              <a href="/contact" style={styles.primaryBtn}>
                Speak to Us
              </a>
              <a href="/how-we-can-help" style={styles.secondaryBtn}>
                See How We Can Help
              </a>
            </div>
          </div>

          <div>
            <div style={styles.card}>
              <div style={styles.sectionLabel}>Why businesses come to us</div>

              <div style={{ marginTop: 24 }}>
                <div>
                  <div style={{ fontSize: 24, fontWeight: 800, color: "#020617" }}>
                    Save money
                  </div>
                  <p style={styles.smallText}>
                    We identify where businesses may be overpaying and help them explore
                    stronger-value payment options.
                  </p>
                </div>

                <div style={{ marginTop: 24 }}>
                  <div style={{ fontSize: 24, fontWeight: 800, color: "#020617" }}>
                    Make sense of the market
                  </div>
                  <p style={styles.smallText}>
                    Merchant services can be confusing. We simplify the options and focus
                    on what actually fits your business.
                  </p>
                </div>

                <div style={{ marginTop: 24 }}>
                  <div style={{ fontSize: 24, fontWeight: 800, color: "#020617" }}>
                    Choose the right partners
                  </div>
                  <p style={styles.smallText}>
                    We work with trusted service partners to help businesses move forward
                    with confidence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
