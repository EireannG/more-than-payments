export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="mx-auto max-w-5xl px-6 py-24">
        <h1 className="text-5xl font-bold tracking-tight">
          More Than Payments
        </h1>

        <p className="mt-6 text-xl text-slate-600">
          Payment solutions for UK &amp; Ireland businesses.
        </p>

        <div className="mt-10 space-y-4">
          <p>
            We help businesses review payment costs, improve cashflow, and find
            the right card and payment solutions.
          </p>

          <p>
            Email:{" "}
            <a
              href="mailto:hello@morethanpayments.com"
              className="underline"
            >
              hello@morethanpayments.com
            </a>
          </p>
        </div>
      </section>
    </main>
  );
}
