export default function MoreThanPaymentsHomepage() {
  const navItems = [
    { label: "About Us", href: "#about" },
    { label: "Solutions & Partners", href: "#solutions" },
    { label: "How We Can Help", href: "#help" },
    { label: "Contact", href: "#contact" },
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

  return (
    <main className="min-h-screen bg-[#f5f7fb] text-slate-900">
      <header className="sticky top-0 z-30 border-b border-slate-200/80 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <a href="#top" className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-200 bg-white shadow-sm">
              <svg viewBox="0 0 64 64" className="h-8 w-8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 33c0-2.2 1.8-4 4-4h25c2.2 0 4 1.8 4 4v14H14c-2.2 0-4-1.8-4-4V33Z" stroke="currentColor" strokeWidth="3" />
                <path d="M22 24l20-8c2.1-.8 4.5.2 5.3 2.3l1.6 4.2-26.9 10.4V24Z" stroke="currentColor" strokeWidth="3" />
                <path d="M44 20c4.2.4 7.5 3.9 7.5 8.2" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                <path d="M48 14.5c6.4.6 11.5 6 11.5 12.6" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </div>
            <div>
              <div className="text-xl font-black tracking-tight">MORE THAN PAYMENTS</div>
              <div className="text-xs font-medium uppercase tracking-[0.25em] text-slate-500">
                UK & Ireland Payment Specialists
              </div>
            </div>
          </a>

          <nav className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-semibold text-slate-700 transition hover:text-slate-950"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="rounded-2xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5"
          >
            Contact
          </a>
        </div>
      </header>

      <section id="top" className="border-b border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:py-24">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex rounded-full bg-slate-100 px-4 py-2 text-sm font-bold uppercase tracking-[0.18em] text-slate-700">
              UK & Ireland Payment Specialists
            </div>
            <h1 className="max-w-4xl text-5xl font-black leading-[0.95] tracking-tight text-slate-950 md:text-7xl">
              Smarter payment solutions for growing businesses.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 md:text-xl">
              We help businesses reduce payment costs, improve cashflow, and choose the right card and payment setup for how they actually trade.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="rounded-2xl bg-slate-950 px-6 py-4 text-base font-semibold text-white shadow-sm transition hover:-translate-y-0.5"
              >
                Speak to Us
              </a>
              <a
                href="#help"
                className="rounded-2xl border border-slate-300 bg-white px-6 py-4 text-base font-semibold text-slate-900 transition hover:border-slate-950"
              >
                See How We Can Help
              </a>
            </div>
          </div>

          <div className="grid gap-5">
            <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8 shadow-sm">
              <div className="text-sm font-bold uppercase tracking-[0.2em] text-slate-500">Why businesses come to us</div>
              <div className="mt-6 space-y-5">
                <div>
                  <div className="text-xl font-bold text-slate-950">Save money</div>
                  <p className="mt-2 text-slate-600">
                    We identify where businesses may be overpaying and help them explore stronger-value payment options.
                  </p>
                </div>
                <div>
                  <div className="text-xl font-bold text-slate-950">Make sense of the market</div>
                  <p className="mt-2 text-slate-600">
                    Merchant services can be confusing. We simplify the options and focus on what actually fits your business.
                  </p>
                </div>
                <div>
                  <div className="text-xl font-bold text-slate-950">Choose the right partners</div>
                  <p className="mt-2 text-slate-600">
                    We work with trusted service partners to help businesses move forward with confidence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <div className="text-sm font-bold uppercase tracking-[0.2em] text-slate-500">About Us</div>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 md:text-5xl">
              Practical payment guidance for businesses that want better value.
            </h2>
          </div>
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
            <p className="text-lg leading-8 text-slate-600">
              More Than Payments helps businesses review their current payment setup, understand where money may be leaking, and find smarter solutions through trusted providers and service partners.
            </p>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              We keep things simple, commercial, and practical. No unnecessary jargon. No overcomplicated pitch. Just clear advice focused on cost, fit, and long-term value.
            </p>
          </div>
        </div>
      </section>

      <section id="solutions" className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-3xl">
            <div className="text-sm font-bold uppercase tracking-[0.2em] text-slate-500">
              Solutions & Partners
            </div>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 md:text-5xl">
              Straightforward support across the payment areas that matter most.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {solutions.map((item) => (
              <div key={item.title} className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8 shadow-sm">
                <h3 className="text-2xl font-bold tracking-tight text-slate-950">{item.title}</h3>
                <p className="mt-4 text-base leading-7 text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-14 rounded-[2rem] border border-dashed border-slate-300 bg-slate-50 p-8">
            <div className="text-sm font-bold uppercase tracking-[0.2em] text-slate-500">Service Partner Areas</div>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {partnerAreas.map((item) => (
                <div key={item} className="rounded-2xl border border-slate-200 bg-white px-5 py-4 text-center text-sm font-semibold text-slate-700 shadow-sm">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="help" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <div className="text-sm font-bold uppercase tracking-[0.2em] text-slate-500">How We Can Help</div>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 md:text-5xl">
              Clear, useful support without the hard sell.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              Whether you are reviewing costs, changing provider, or simply want a second opinion, we help you move forward with more clarity and less wasted time.
            </p>
          </div>

          <div className="grid gap-4">
            {helpPoints.map((item) => (
              <div key={item} className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-950 text-sm font-bold text-white">
                  ✓
                </div>
                <p className="text-base font-medium leading-7 text-slate-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="border-t border-slate-200 bg-slate-950">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 text-white lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
          <div>
            <div className="text-sm font-bold uppercase tracking-[0.2em] text-slate-400">Contact</div>
            <h2 className="mt-4 text-3xl font-black tracking-tight md:text-5xl">
              Ready to talk through your current payment setup?
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
              Get in touch for a straightforward conversation about your current provider, your costs, and the options available to your business.
            </p>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur">
            <form className="grid gap-5">
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-200">Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder:text-slate-400 focus:border-white/30 focus:outline-none"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-200">Email</label>
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder:text-slate-400 focus:border-white/30 focus:outline-none"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-200">Business name</label>
                <input
                  type="text"
                  placeholder="Your business"
                  className="w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder:text-slate-400 focus:border-white/30 focus:outline-none"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-200">How can we help?</label>
                <textarea
                  rows={5}
                  placeholder="Tell us a little about your current payment setup or what you want to improve"
                  className="w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder:text-slate-400 focus:border-white/30 focus:outline-none"
                />
              </div>
              <button
                type="submit"
                className="rounded-2xl bg-white px-6 py-4 text-base font-semibold text-slate-950 transition hover:-translate-y-0.5"
              >
                Send Enquiry
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
