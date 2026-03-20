import Image from "next/image";
export default function HomePage() {
  return (
    <main className="page">
       {/* HEADER */}
  <header className="header">
    <div className="wrap header-inner">
      <Image
        src="/logo.png"
        alt="More Than Payments"
        width={300}
        height={90}
       style={{ opacity: 0.9 }}
      />

      <a
        href="mailto:hello@morethanpayments.com"
        className="btn btn-primary"
      >
        Contact
      </a>
    </div>
  </header> 
      <section className="hero">
        <div className="wrap">
          <div className="eyebrow">UK &amp; Ireland payment specialists</div>
          <h1 className="title">
            Smarter payment solutions for growing businesses.
          </h1>
          <p className="subtitle">
            We help businesses reduce payment costs, improve cashflow, and choose
            the right card and payment setup for how they actually trade.
          </p>

          <div className="hero-actions">
            <a
              href="mailto:hello@morethanpayments.com?subject=Free%20Payment%20Review"
              className="btn btn-primary"
            >
              Get a free review
            </a>
            <a href="mailto:hello@morethanpayments.com" className="btn btn-secondary">
              Email us
            </a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-heading">
            <h2>What we do</h2>
            <p>
              Practical support for businesses that want better value, clearer
              advice, and payment solutions that fit their operation.
            </p>
          </div>

          <div className="card-grid">
            <div className="card">
              <h3>Payment cost reviews</h3>
              <p>
                We review your current setup, charges, and provider terms to help
                identify opportunities to reduce costs.
              </p>
            </div>

            <div className="card">
              <h3>Card &amp; merchant solutions</h3>
              <p>
                Guidance on card machines, merchant services, and payment options
                that work for your business model.
              </p>
            </div>

            <div className="card">
              <h3>Cashflow support</h3>
              <p>
                Better payment processes can improve speed of collection, reduce
                friction, and strengthen day-to-day cashflow.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="wrap two-col">
          <div>
            <h2>Why More Than Payments</h2>
            <p className="body-copy">
              Too many providers overcomplicate things or bury the important
              detail. We keep it straightforward, commercial, and focused on what
              matters most to your business.
            </p>
          </div>

          <div className="check-list">
            <div className="check-item">UK &amp; Ireland market focus</div>
            <div className="check-item">Clear, practical advice</div>
            <div className="check-item">Commercial focus on value and fit</div>
            <div className="check-item">Straightforward support from first conversation</div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap cta-box">
          <div>
            <h2>Ready to review your payment setup?</h2>
            <p>
              Start with a straightforward conversation about your current costs,
              provider, and what better could look like.
            </p>
          </div>

          <div className="cta-actions">
            <a
              href="mailto:hello@morethanpayments.com?subject=Website%20Enquiry"
              className="btn btn-primary"
            >
              Contact us
            </a>
            <div className="contact-line">
              hello@morethanpayments.com
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
