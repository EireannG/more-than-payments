export default function HomePage() {
  return (
    <main className="page">
      <section className="wrap">
        
        {/* HERO */}
        <h1 className="title">
          Smarter Payment Solutions for UK & Ireland Businesses
        </h1>
        <p className="subtitle">
          Reduce costs. Improve cashflow. Get the right payment setup.
        </p>

        <div style={{ marginTop: "30px" }}>
          <a
            href="mailto:hello@morethanpayments.com"
            style={{
              display: "inline-block",
              padding: "12px 24px",
              background: "#0f172a",
              color: "white",
              textDecoration: "none",
              borderRadius: "6px",
              fontWeight: "600",
            }}
          >
            Get a Free Review
          </a>
        </div>

        {/* SERVICES */}
        <div style={{ marginTop: "80px" }}>
          <h2 style={{ fontSize: "28px", marginBottom: "20px" }}>
            What We Do
          </h2>

          <ul style={{ lineHeight: "2" }}>
            <li>✔ Payment cost reviews & savings</li>
            <li>✔ Card & merchant provider setup</li>
            <li>✔ Cashflow optimisation</li>
          </ul>
        </div>

        {/* WHY US */}
        <div style={{ marginTop: "80px" }}>
          <h2 style={{ fontSize: "28px", marginBottom: "20px" }}>
            Why More Than Payments
          </h2>

          <ul style={{ lineHeight: "2" }}>
            <li>✔ UK & Ireland specialists</li>
            <li>✔ Independent advice (no bias)</li>
            <li>✔ Focused on saving you money</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div style={{ marginTop: "80px" }}>
          <h2 style={{ fontSize: "28px", marginBottom: "10px" }}>
            Get in touch
          </h2>

          <p>
            Email:{" "}
            <a href="mailto:hello@morethanpayments.com">
              hello@morethanpayments.com
            </a>
          </p>
        </div>

      </section>
    </main>
  );
  
}
