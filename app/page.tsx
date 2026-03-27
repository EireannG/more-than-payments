import type { CSSProperties } from "react";

export default function MoreThanPaymentsHomepage() {
  const navItems = [
  { label: "About Us", href: "/about" },
  { label: "Solutions & Partners", href: "/solutions-partners" },
  { label: "How We Can Help", href: "/how-we-can-help" },
];

  const partnerAreas = [
    "Card Terminals",
    "Online Payments",
    "EPOS Systems",
    "Direct Debit",
    "Open Banking",
    "Merchant Services",
  ];

  const solutions = [
    {
      title: "Card Payment Cost Reviews",
      text: "We assess your current setup, uncover hidden charges, and benchmark your rates against stronger market options.",
    },
    {
      title: "Terminal & EPOS Advice",
      text: "We help you choose practical in-store payment and till solutions that match how your business actually trades.",
    },
    {
      title: "Online & Remote Payments",
      text: "From payment links to gateway setups, we help businesses take payments smoothly across web, phone, and invoice channels.",
    },
    {
      title: "Provider Introductions",
      text: "We connect you with trusted service partners when a better fit, better support, or better commercials are available.",
    },
  ];

  const helpPoints = [
    "Reduce avoidable payment processing costs",
    "Improve cashflow with a cleaner payment setup",
    "Compare providers without wasting time",
    "Choose solutions that fit your business model",
    "Cut through confusing rates, contracts, and jargon",
    "Get practical advice without sales fluff",
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
      gap: "14px",
      textDecoration: "none",
      color: "inherit",
    },
    logoBox: {
      width: "52px",
      height: "52px",
      borderRadius: "18px",
      border: "1px solid #e2e8f0",
      backgroundColor: "#fff",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: "0 2px 8px rgba(15,23,42,0.06)",
      flexShrink: 0,
    },
    brandTitle: {
      fontSize: "22px",
      fontWeight: 800,
      letterSpacing: "-0.02em",
    },
    brandSub: {
      fontSize: "11px",
      fontWeight: 700,
      letterSpacing: "0.18em",
      textTransform: "uppercase",
      color: "#64748b",
      marginTop: "3px",
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
    cardWhite: {
      border: "1px solid #e2e8f0",
      borderRadius: "28px",
      backgroundColor: "#fff",
      padding: "32px",
      boxShadow: "0 8px 24px rgba(15,23,42,0.05)",
    },
    section: {
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "80px 24px",
    },
    sectionGrid: {
      display: "grid",
      gridTemplateColumns: "0.9fr 1.1fr",
      gap: "40px",
      alignItems: "start",
    },
    sectionLabel: {
      fontSize: "12px",
      fontWeight: 800,
      letterSpacing: "0.14em",
      textTransform: "uppercase",
      color: "#64748b",
    },
    h2: {
      fontSize: "48px",
      lineHeight: 1.05,
      letterSpacing: "-0.03em",
      fontWeight: 900,
      margin: "16px 0 0 0",
      color: "#020617",
    },
    bodyText: {
      fontSize: "20px",
      lineHeight: 1.8,
      color: "#475569",
      margin: 0,
    },
    bodyTextSpaced: {
      fontSize: "20px",
      lineHeight: 1.8,
      color: "#475569",
      marginTop: "24px",
    },
    splitSection: {
      borderTop: "1px solid #e2e8f0",
      borderBottom: "1px solid #e2e8f0",
      backgroundColor: "#fff",
    },
    solutionGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
      gap: "24px",
      marginTop: "48px",
    },
    h3: {
      margin: 0,
      fontSize: "30px",
      fontWeight: 800,
      letterSpacing: "-0.02em",
      color: "#020617",
    },
    smallText: {
      marginTop: "16px",
      fontSize: "17px",
      lineHeight: 1.7,
      color: "#475569",
    },
    partnerWrap: {
      marginTop: "48px",
      border: "1px dashed #cbd5e1",
      borderRadius: "28px",
      backgroundColor: "#f8fafc",
      padding: "32px",
    },
    partnerGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
      gap: "16px",
      marginTop: "24px",
    },
    partnerBox: {
      backgroundColor: "#fff",
      border: "1px solid #e2e8f0",
      borderRadius: "18px",
      padding: "16px",
      textAlign: "center",
      fontWeight: 700,
      color: "#334155",
    },
    helpGrid: {
      display: "grid",
      gridTemplateColumns: "0.95fr 1.05fr",
      gap: "40px",
    },
    helpList: {
      display: "grid",
      gap: "16px",
    },
    helpItem: {
      display: "flex",
      alignItems: "flex-start",
      gap: "16px",
      border: "1px solid #e2e8f0",
      backgroundColor: "#fff",
      borderRadius: "18px",
      padding: "20px",
      boxShadow: "0 8px 20px rgba(15,23,42,0.04)",
    },
    check: {
      width: "28px",
      height: "28px",
      borderRadius: "999px",
      backgroundColor: "#020617",
      color: "#fff",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "14px",
      fontWeight: 800,
      flexShrink: 0,
      marginTop: "2px",
    },
    contactSection: {
      borderTop: "1px solid #1e293b",
      backgroundColor: "#020617",
      color: "#fff",
    },
    contactGrid: {
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "80px 24px",
      display: "grid",
      gridTemplateColumns: "0.95fr 1.05fr",
      gap: "40px",
    },
    contactText: {
      fontSize: "20px",
      lineHeight: 1.8,
      color: "#cbd5e1",
      marginTop: "24px",
      maxWidth: "620px",
    },
    formWrap: {
      border: "1px solid rgba(255,255,255,0.1)",
      backgroundColor: "rgba(255,255,255,0.05)",
      borderRadius: "28px",
      padding: "32px",
      boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
    },
    form: {
      display: "grid",
      gap: "20px",
    },
    label: {
      display: "block",
      marginBottom: "8px",
      fontSize: "14px",
      fontWeight: 700,
      color: "#e2e8f0",
    },
    input: {
      width: "100%",
      padding: "14px 16px",
      borderRadius: "18px",
      border: "1px solid rgba(255,255,255,0.12)",
      backgroundColor: "rgba(255,255,255,0.08)",
      color: "#fff",
      fontSize: "16px",
      boxSizing: "border-box",
    },
    textarea: {
      width: "100%",
      padding: "14px 16px",
      borderRadius: "18px",
      border: "1px solid rgba(255,255,255,0.12)",
      backgroundColor: "rgba(255,255,255,0.08)",
      color: "#fff",
      fontSize: "16px",
      minHeight: "140px",
      boxSizing: "border-box",
      fontFamily: "Arial, sans-serif",
    },
    submit: {
      display: "inline-block",
      padding: "16px 24px",
      borderRadius: "18px",
      backgroundColor: "#fff",
      color: "#020617",
      fontWeight: 700,
      border: "none",
      cursor: "pointer",
      fontSize: "16px",
    },
  };

  return (
    <main style={styles.page}>
      <header style={styles.header}>
        <div style={{ ...styles.container, ...styles.headerInner }}>
          <a href="#top" style={styles.brand}>
            <div style={styles.logoBox}>
              <svg viewBox="0 0 64 64" style={{ width: 34, height: 34 }} fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 33c0-2.2 1.8-4 4-4h25c2.2 0 4 1.8 4 4v14H14c-2.2 0-4-1.8-4-4V33Z" stroke="currentColor" strokeWidth="3" />
                <path d="M22 24l20-8c2.1-.8 4.5.2 5.3 2.3l1.6 4.2-26.9 10.4V24Z" stroke="currentColor" strokeWidth="3" />
                <path d="M44 20c4.2.4 7.5 3.9 7.5 8.2" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                <path d="M48 14.5c6.4.6 11.5 6 11.5 12.6" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </div>
            <div>
              <div style={styles.brandTitle}>MORE THAN PAYMENTS</div>
              <div style={styles.brandSub}>UK &amp; Ireland Payment Specialists</div>
            </div>
          </a>

          <nav style={styles.nav}>
            {navItems.map((item) => (
              <a key={item.label} href={item.href} style={styles.navLink}>
                {item.label}
              </a>
            ))}
          </nav>

          <a href="#contact" style={styles.primaryBtn}>
            Contact
          </a>
        </div>
      </header>

      <section id="top" style={styles.hero}>
        <div style={styles.heroGrid}>
          <div>
            <div style={styles.pill}>UK &amp; Ireland Payment Specialists</div>
            <h1 style={styles.h1}>Smarter payment solutions for growing businesses.</h1>
            <p style={styles.lead}>
              We help businesses reduce payment costs, improve cashflow, and choose the right card and payment setup for how they actually trade.
            </p>
            <div style={styles.buttonRow}>
              <a href="#contact" style={styles.primaryBtn}>Speak to Us</a>
              <a href="#help" style={styles.secondaryBtn}>See How We Can Help</a>
            </div>
          </div>

          <div>
            <div style={styles.card}>
              <div style={styles.sectionLabel}>Why businesses come to us</div>
              <div style={{ marginTop: 24 }}>
                <div>
                  <div style={{ fontSize: 24, fontWeight: 800, color: "#020617" }}>Save money</div>
                  <p style={styles.smallText}>We identify where businesses may be overpaying and help them explore stronger-value payment options.</p>
                </div>
                <div style={{ marginTop: 24 }}>
                  <div style={{ fontSize: 24, fontWeight: 800, color: "#020617" }}>Make sense of the market</div>
                  <p style={styles.smallText}>Merchant services can be confusing. We simplify the options and focus on what actually fits your business.</p>
                </div>
                <div style={{ marginTop: 24 }}>
                  <div style={{ fontSize: 24, fontWeight: 800, color: "#020617" }}>Choose the right partners</div>
                  <p style={styles.smallText}>We work with trusted service partners to help businesses move forward with confidence.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

          <div style={styles.solutionGrid}>
            {solutions.map((item) => (
              <div key={item.title} style={styles.card}>
                <h3 style={styles.h3}>{item.title}</h3>
                <p style={styles.smallText}>{item.text}</p>
              </div>
            ))}
          </div>

          <div style={styles.partnerWrap}>
            <div style={styles.sectionLabel}>Service Partner Areas</div>
            <div style={styles.partnerGrid}>
              {partnerAreas.map((item) => (
                <div key={item} style={styles.partnerBox}>{item}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

    
          <div style={styles.formWrap}>
            <form style={styles.form}>
              <div>
                <label style={styles.label}>Name</label>
                <input type="text" placeholder="Your name" style={styles.input} />
              </div>
              <div>
                <label style={styles.label}>Email</label>
                <input type="email" placeholder="Your email" style={styles.input} />
              </div>
              <div>
                <label style={styles.label}>Business name</label>
                <input type="text" placeholder="Your business" style={styles.input} />
              </div>
              <div>
                <label style={styles.label}>How can we help?</label>
                <textarea placeholder="Tell us a little about your current payment setup or what you want to improve" style={styles.textarea} />
              </div>
              <button type="submit" style={styles.submit}>Send Enquiry</button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
