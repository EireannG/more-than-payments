const helpPoints = [
  "Reduce avoidable payment processing costs",
  "Improve cashflow with a cleaner payment setup",
  "Compare providers without wasting time",
  "Choose solutions that fit your business model",
  "Cut through confusing rates, contracts, and jargon",
  "Get practical advice without sales fluff",
];

export default function HowWeCanHelpPage() {
  return (
    <main style={{ maxWidth: "1100px", margin: "0 auto", padding: "80px 24px" }}>
      <div style={{ fontSize: "12px", fontWeight: 800, letterSpacing: "0.14em", textTransform: "uppercase", color: "#64748b" }}>
        How We Can Help
      </div>
      <h1 style={{ fontSize: "56px", lineHeight: 1.05, fontWeight: 900, letterSpacing: "-0.03em", color: "#020617", margin: "16px 0 24px" }}>
        Clear, useful support without the hard sell.
      </h1>
      <p style={{ fontSize: "20px", lineHeight: 1.8, color: "#475569", maxWidth: "800px" }}>
        Whether you are reviewing costs, changing provider, or simply want a second opinion, we help you move forward with more clarity and less wasted time.
      </p>

      <div style={{ display: "grid", gap: "16px", marginTop: "40px" }}>
        {helpPoints.map((item) => (
          <div
            key={item}
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "16px",
              border: "1px solid #e2e8f0",
              backgroundColor: "#fff",
              borderRadius: "18px",
              padding: "20px",
              boxShadow: "0 8px 20px rgba(15,23,42,0.04)",
            }}
          >
            <div
              style={{
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
              }}
            >
              ✓
            </div>
            <div style={{ fontSize: "17px", lineHeight: 1.7, color: "#334155", fontWeight: 600 }}>{item}</div>
          </div>
        ))}
      </div>
    </main>
  );
}
