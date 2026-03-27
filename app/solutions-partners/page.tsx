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

const partnerAreas = [
  "Card Terminals",
  "Online Payments",
  "EPOS Systems",
  "Direct Debit",
  "Open Banking",
  "Merchant Services",
];

export default function SolutionsPartnersPage() {
  return (
    <main style={{ maxWidth: "1100px", margin: "0 auto", padding: "80px 24px" }}>
      <div style={{ fontSize: "12px", fontWeight: 800, letterSpacing: "0.14em", textTransform: "uppercase", color: "#64748b" }}>
        Solutions & Partners
      </div>
      <h1 style={{ fontSize: "56px", lineHeight: 1.05, fontWeight: 900, letterSpacing: "-0.03em", color: "#020617", margin: "16px 0 24px" }}>
        Straightforward support across the payment areas that matter most.
      </h1>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: "24px", marginTop: "40px" }}>
        {solutions.map((item) => (
          <div
            key={item.title}
            style={{
              border: "1px solid #e2e8f0",
              borderRadius: "28px",
              backgroundColor: "#f8fafc",
              padding: "32px",
              boxShadow: "0 8px 24px rgba(15,23,42,0.05)",
            }}
          >
            <h2 style={{ margin: 0, fontSize: "30px", fontWeight: 800, color: "#020617" }}>{item.title}</h2>
            <p style={{ marginTop: "16px", fontSize: "17px", lineHeight: 1.7, color: "#475569" }}>{item.text}</p>
          </div>
        ))}
      </div>

      <div
        style={{
          marginTop: "48px",
          border: "1px dashed #cbd5e1",
          borderRadius: "28px",
          backgroundColor: "#f8fafc",
          padding: "32px",
        }}
      >
        <div style={{ fontSize: "12px", fontWeight: 800, letterSpacing: "0.14em", textTransform: "uppercase", color: "#64748b" }}>
          Service Partner Areas
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: "16px", marginTop: "24px" }}>
          {partnerAreas.map((item) => (
            <div
              key={item}
              style={{
                backgroundColor: "#fff",
                border: "1px solid #e2e8f0",
                borderRadius: "18px",
                padding: "16px",
                textAlign: "center",
                fontWeight: 700,
                color: "#334155",
              }}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
