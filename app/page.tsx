export default function HomePage() {
  const services = [
    "Card payment solutions",
    "EPOS and till integrations",
    "Online and remote payments",
    "Payment cost reviews",
    "Merchant account guidance",
    "Support for switching providers",
  ];

  const serviceCards = [
    {
      title: "Card Machines",
      text: "Portable, countertop, and mobile card machine options for retail, hospitality, and service businesses.",
    },
    {
      title: "EPOS Solutions",
      text: "Integrated payment and till systems to help simplify sales, reporting, and day-to-day operations.",
    },
    {
      title: "Online Payments",
      text: "Secure solutions for websites, remote payments, and businesses that need a smoother online checkout.",
    },
    {
      title: "Cost Reviews",
      text: "A clear review of your current provider, pricing, and options so you can make an informed decision.",
    },
  ];

  const reasons = [
    "Straightforward advice without the jargon",
    "Support for businesses across the UK and Ireland",
    "Clear focus on value, service, and suitability",
    "A consultative approach rather than a hard sell",
  ];

  const steps = [
    {
      step: "01",
      title: "Initial conversation",
      text: "We learn about your business, how you take payments today, and what is not working.",
    },
    {
      step: "02",
      title: "Review and recommendation",
      text: "We look at suitable options and explain them in plain English, including costs and fit.",
    },
    {
      step: "03",
      title: "Switch and support",
      text: "If you decide to move forward, we help you through the setup so the process stays smooth.",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4">
          <div>
            <div className="text-2xl font-bold tracking-tight">More Than Payments</div>
            <div className="text-sm text-slate-500">
              Payment solutions for UK &amp; Ireland businesses
            </div>
          </div>
          <nav className="hidden items-center gap-6 text-sm text-slate-600 md:flex">
            <a href="#services" className="transition hover:text-slate-900">
              Services
            </a>
            <a href="#why-us" className="transition hover:text-slate-900">
              Why Us
            </a>
            <a href="#process" className="transition hover:text-slate-900">
              Process
            </a>
            <a href="#contact" className="transition hover:text-slate-900">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <div className="mb-6 inline-flex items-center rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600">
              Trusted payment support for growing businesses
            </div>
            <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight md:text-6xl">
              Smarter payment solutions for ambitious businesses.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 md:text-xl">
              More Than Payments helps businesses across the UK and Ireland review
              payment costs, improve cashflow, and find the right card and payment
              solutions for the way they trade.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="#contact"
                className="rounded-2xl bg-slate-900 px-6 py-4 text-center text-base font-medium text-white shadow-sm transition hover:bg-slate-800"
              >
                Book a free consultation
              </a>
              <a
                href="#services"
                className="rounded-2xl border border-slate-300 px-6 py-4 text-center text-base font-medium transition hover:border-slate-400"
              >
                Explore services
              </a>
            </div>
            <div className="mt-8 grid max-w-xl grid-cols-3 gap-6 text-sm">
              <div>
                <div className="text-2xl font-bold">UK &amp; IE</div>
                <div className="mt-1 text-slate-500">Coverage</div>
              </div>
              <div>
                <div className="text-2xl font-bold">Fast</div>
                <div className="mt-1 text-slate-500">Straight answers</div>
              </div>
              <div>
                <div className="text-2xl font-bold">Clear</div>
                <div className="mt-1 text-slate-500">No jargon</div>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm md:p-10">
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              What we help with
            </div>
            <div className="mt-6 space-y-4">
              {services.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-slate-200 bg-white p-4 text-base shadow-sm"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Practical payment support, tailored to your business
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              We work with businesses that want better value, better service, and
              payment solutions that fit how they actually operate.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {serviceCards.map((card) => (
              <div
                key={card.title}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <h3 className="text-xl font-semibold">{card.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="why-us" className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Why businesses choose More Than Payments
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              Too many payment providers make things sound simple, then bury the
              important details. We keep things clear, commercial, and focused on
              what actually matters to your business.
            </p>
          </div>
          <div className="grid gap-5">
            {reasons.map((item) => (
              <div
                key={item}
                className="flex items-start gap-4 rounded-2xl border border-slate-200 p-5"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 text-sm font-semibold text-white">
                  ✓
                </div>
                <div className="text-base leading-7">{item}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">How it works</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {steps.map((item) => (
              <div
                key={item.step}
                className="rounded-3xl border border-white/10 bg-white/5 p-6"
              >
                <div className="text-sm text-slate-300">Step {item.step}</div>
                <h3 className="mt-3 text-2xl font-semibold">{item.title}</h3>
                <p className="mt-3 leading-7 text-slate-300">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Let’s talk about your payment setup
            </h2>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">
              Whether you are reviewing your current costs, exploring new payment
              options, or want a clearer commercial view of what is available, we are
              happy to start with a straightforward conversation.
            </p>
            <div className="mt-8 space-y-3 text-base">
              <div>
                <span className="font-semibold">Email:</span>{" "}
                <a
                  href="mailto:hello@morethanpayments.com"
                  className="underline underline-offset-4"
                >
                  hello@morethanpayments.com
                </a>
              </div>
              <div>
                <span className="font-semibold">Website:</span> www.morethanpayments.com
              </div>
              <div>
                <span className="font-semibold">Coverage:</span> UK &amp; Ireland
              </div>
            </div>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
            <h3 className="text-2xl font-semibold">Quick enquiry</h3>
            <p className="mt-2 text-slate-600">
              For now, replace this with a real form tool later. The fastest live option
              is to keep this section and add a mailto button.
            </p>
            <div className="mt-6 space-y-4">
              <div className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-400">
                Your name
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-400">
                Business name
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-400">
                Email address
              </div>
              <div className="min-h-[120px] rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-400">
                How can we help?
              </div>
              <a
                href="mailto:hello@morethanpayments.com?subject=Website%20Enquiry"
                className="block rounded-2xl bg-slate-900 px-6 py-4 text-center font-medium text-white transition hover:bg-slate-800"
              >
                Email us now
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <div>© More Than Payments. All rights reserved.</div>
          <div>hello@morethanpayments.com</div>
        </div>
      </footer>
    </div>
  );
}
