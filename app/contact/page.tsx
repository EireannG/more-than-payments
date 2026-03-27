export default function ContactPage() {
  return (
    <main style={{ maxWidth: "1100px", margin: "0 auto", padding: "80px 24px" }}>
      <div style={{ fontSize: "12px", fontWeight: 800, letterSpacing: "0.14em", textTransform: "uppercase", color: "#64748b" }}>
        Contact
      </div>
      <h1 style={{ fontSize: "56px", lineHeight: 1.05, fontWeight: 900, letterSpacing: "-0.03em", color: "#020617", margin: "16px 0 24px" }}>
        Ready to talk through your current payment setup?
      </h1>
      <p style={{ fontSize: "20px", lineHeight: 1.8, color: "#475569", maxWidth: "800px" }}>
        Get in touch for a straightforward conversation about your current provider, your costs, and the options available to your business.
      </p>

      <form style={{ display: "grid", gap: "20px", marginTop: "40px", maxWidth: "700px" }}>
        <input type="text" placeholder="Your name" style={{ width: "100%", padding: "14px 16px", borderRadius: "18px", border: "1px solid #cbd5e1" }} />
        <input type="email" placeholder="Your email" style={{ width: "100%", padding: "14px 16px", borderRadius: "18px", border: "1px solid #cbd5e1" }} />
        <input type="text" placeholder="Your business" style={{ width: "100%", padding: "14px 16px", borderRadius: "18px", border: "1px solid #cbd5e1" }} />
        <textarea placeholder="Tell us a little about your current payment setup or what you want to improve" style={{ width: "100%", padding: "14px 16px", borderRadius: "18px", border: "1px solid #cbd5e1", minHeight: "140px", fontFamily: "Arial, sans-serif" }} />
        <button type="submit" style={{ padding: "16px 24px", borderRadius: "18px", backgroundColor: "#020617", color: "#fff", fontWeight: 700, border: "none", cursor: "pointer", width: "fit-content" }}>
          Send Enquiry
        </button>
      </form>
    </main>
  );
}
