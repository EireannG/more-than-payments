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
}