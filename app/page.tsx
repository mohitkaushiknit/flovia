const whatsappNumber = "919999999999";

const whatsappMessage = encodeURIComponent(
  "Hi Flovia, I want to know more about your lead capture and follow-up system."
);

const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
const services = [
  {
    number: "01",
    title: "Lead Capture Websites",
    description:
      "High-converting landing pages that turn visitors into enquiries.",
  },
  {
    number: "02",
    title: "WhatsApp Integration",
    description:
      "Make it easy for potential customers to start a conversation instantly.",
  },
  {
    number: "03",
    title: "Lead Tracking",
    description:
      "Keep enquiries organised instead of losing them across chats and forms.",
  },
  {
    number: "04",
    title: "Follow-up Automation",
    description:
      "Automate notifications and follow-ups so fewer leads get forgotten.",
  },
];

const steps = [
  "Customer visits your website",
  "Customer submits an enquiry",
  "Lead is stored automatically",
  "You get notified",
  "Follow-up starts",
];

export default function Home() {
  const whatsappNumber = "917015505745";
  const demoUrl = "https://plot-landing.vercel.app/";

  const whatsappMessage = encodeURIComponent(
    "Hi Flovia, I'd like to see a demo of your lead automation system."
  );

  return (
    <main className="min-h-screen overflow-hidden bg-[#f8fafc] text-slate-950">
      {/* Navbar */}
      <header className="border-b border-slate-800 bg-slate-950 text-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">

          <a
            href="/"
            className="text-xl font-bold tracking-tight text-white"
          >
            Flovia
          </a>

          <div className="flex items-center gap-3">
            <a
              href="/offer"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-slate-800"
            >
              View Our Offer
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white px-5 py-2.5 text-sm font-medium text-slate-950 transition hover:bg-slate-200"
            >
              Get a Demo
            </a>
          </div>

        </div>
      </header>

      {/* Hero */}
      <section className="relative">
        <div className="absolute left-1/2 top-0 -z-10 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-blue-100/50 blur-3xl" />

        <div className="mx-auto max-w-6xl px-6 pb-24 pt-20 lg:px-8 lg:pb-32 lg:pt-28">
          <div className="max-w-4xl">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Lead capture & follow-up automation
            </div>

            <h1 className="max-w-4xl text-5xl font-bold leading-[1.05] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
              Turn more enquiries into{" "}
              <span className="text-blue-600">real opportunities.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
              Flovia helps businesses capture enquiries, organise leads and
              automate follow-ups — so potential customers don&apos;t get
              forgotten.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-xl bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-slate-950/10 transition hover:-translate-y-0.5 hover:bg-slate-800"
              >
                Get a Demo on WhatsApp
                <span className="ml-2">→</span>
              </a>

              <a
                href="#demo"
                className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-6 py-3.5 text-sm font-semibold text-slate-900 transition hover:border-slate-400 hover:bg-slate-50"
              >
                View Demo
              </a>
            </div>
          </div>

          {/* Hero visual */}
          <div className="mt-20 rounded-3xl border border-slate-200 bg-white p-2 shadow-2xl shadow-slate-900/5">
            <div className="rounded-[1.35rem] bg-slate-950 p-6 sm:p-8">
              <div className="flex items-center justify-between border-b border-white/10 pb-5">
                <div>
                  <p className="text-sm font-medium text-white">
                    Lead Automation
                  </p>
                  <p className="mt-1 text-xs text-slate-500">
                    Simple systems. Better follow-up.
                  </p>
                </div>

                <div className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-emerald-400">
                  System Active
                </div>
              </div>

              <div className="grid gap-3 py-6 sm:grid-cols-5">
                {steps.map((step, index) => (
                  <div key={step} className="relative">
                    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                      <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500/10 text-xs font-bold text-blue-400">
                        0{index + 1}
                      </div>
                      <p className="text-sm font-medium leading-5 text-white">
                        {step}
                      </p>
                    </div>

                    {index < steps.length - 1 && (
                      <span className="absolute -right-2 top-1/2 hidden text-slate-600 sm:block">
                        →
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-24 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-600">
              What we build
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Simple systems that help you handle more leads.
            </h2>

            <p className="mt-4 text-slate-600">
              We connect the parts of your enquiry process so your team can
              spend less time managing leads manually.
            </p>
          </div>

          <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-slate-200 bg-slate-200 sm:grid-cols-2">
            {services.map((service) => (
              <div
                key={service.number}
                className="bg-white p-8 transition hover:bg-slate-50 sm:p-10"
              >
                <span className="text-sm font-semibold text-blue-600">
                  {service.number}
                </span>

                <h3 className="mt-5 text-xl font-bold">{service.title}</h3>

                <p className="mt-3 max-w-sm leading-7 text-slate-600">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo */}
      <section id="demo" className="bg-[#f8fafc]">
        <div className="mx-auto max-w-6xl px-6 py-24 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-600">
                Live demo
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                See a real example.
              </h2>

              <p className="mt-5 max-w-lg leading-7 text-slate-600">
                See how a real-estate business can capture enquiries and turn them
                into organised leads ready for follow-up.
              </p>

              <a
                href={demoUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex items-center rounded-xl bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                View Real Estate Demo
                <span className="ml-2">↗</span>
              </a>
            </div>

            {/* Demo preview */}
            <div className="rounded-3xl border border-slate-200 bg-white p-3 shadow-xl shadow-slate-900/5">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-7">
                <div className="flex items-center justify-between border-b border-slate-100 pb-5">
                  <div>
                    <p className="font-semibold text-slate-950">
                      New Property Enquiry
                    </p>
                    <p className="mt-1 text-xs text-slate-500">
                      Lead captured from website
                    </p>
                  </div>

                  <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-600">
                    New Lead
                  </span>
                </div>

                <div className="space-y-4 py-6">
                  <div className="rounded-xl bg-slate-50 p-4">
                    <p className="text-xs font-medium text-slate-400">Customer</p>
                    <p className="mt-1 text-sm font-semibold text-slate-900">
                      Rahul Sharma
                    </p>
                  </div>

                  <div className="rounded-xl bg-slate-50 p-4">
                    <p className="text-xs font-medium text-slate-400">
                      Interested In
                    </p>
                    <p className="mt-1 text-sm font-semibold text-slate-900">
                      3 BHK Apartment
                    </p>
                  </div>

                  <div className="rounded-xl bg-slate-50 p-4">
                    <p className="text-xs font-medium text-slate-400">
                      Contact Preference
                    </p>
                    <p className="mt-1 text-sm font-semibold text-slate-900">
                      WhatsApp/Email
                    </p>
                  </div>
                </div>

                <div className="rounded-xl bg-blue-50 p-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600 text-sm text-white">
                      ✓
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-slate-900">
                        Follow-up ready
                      </p>
                      <p className="mt-0.5 text-xs text-slate-500">
                        Your team has been notified.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-24 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-600">
              Built for growing businesses
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Built around your sales process.
            </h2>
          </div>

          <div className="mx-auto mt-12 grid max-w-3xl gap-5 sm:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-xl">
                🏠
              </div>
              <h3 className="mt-6 text-xl font-bold">Real Estate</h3>
              <p className="mt-2 leading-7 text-slate-600">
                Capture property enquiries and make sure every potential buyer
                or seller gets followed up.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-xl">
                🎓
              </div>
              <h3 className="mt-6 text-xl font-bold">Coaching</h3>
              <p className="mt-2 leading-7 text-slate-600">
                Turn website visitors into consultation enquiries and keep
                prospects moving through your process.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-slate-950">
        <div className="mx-auto max-w-4xl px-6 py-24 text-center lg:px-8 lg:py-28">
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-400">
            Get started
          </p>

          <h2 className="mt-5 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Ready to handle your enquiries better?
          </h2>

          <p className="mx-auto mt-5 max-w-xl leading-7 text-slate-400">
            Let&apos;s build a simple system that captures your leads and
            helps you follow up consistently.
          </p>

          <a
            href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
            target="_blank"
            rel="noreferrer"
            className="mt-9 inline-flex rounded-xl bg-white px-7 py-4 text-sm font-bold text-slate-950 transition hover:bg-slate-100"
          >
            Get a Demo on WhatsApp →
          </a>
        </div>
      </section>
      {/* Client / Work */}
      <section className="border-y border-slate-100 bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="mb-12">
            <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">
              Selected Client
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Built for GRAM SCS
            </h2>

            <p className="mt-4 max-w-2xl text-slate-600">
              A full-stack logistics website and business management system
              built for a New Delhi-based logistics company.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            {/* Project Preview */}
            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
              <div className="border-b border-slate-100 px-6 py-4">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-slate-900">
                    GRAM Supply Chain Solutions
                  </span>

                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                    Logistics
                  </span>
                </div>
              </div>

              <div className="bg-slate-100 p-6">
                <div className="rounded-2xl border border-slate-200 bg-white p-6">
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Integrated Logistics
                  </p>

                  <h3 className="mt-3 text-2xl font-bold text-slate-900">
                    Supply Chain Solutions
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    Warehousing, transportation, freight forwarding,
                    automation and shipment tracking.
                  </p>

                  <div className="mt-6 grid grid-cols-2 gap-3">
                    <div className="rounded-xl bg-slate-50 p-3 text-sm font-medium">
                      Contact Management
                    </div>

                    <div className="rounded-xl bg-slate-50 p-3 text-sm font-medium">
                      Shipment Tracking
                    </div>

                    <div className="rounded-xl bg-slate-50 p-3 text-sm font-medium">
                      Service Management
                    </div>

                    <div className="rounded-xl bg-slate-50 p-3 text-sm font-medium">
                      Full-Stack System
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Project Details */}
            <div>
              <h3 className="text-2xl font-bold text-slate-900">
                Full-stack website for a logistics business
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                We built a complete business website for GRAM SCS with
                structured service pages, customer contact functionality,
                logistics information and shipment tracking.
              </p>

              <div className="mt-6 space-y-3">
                {[
                  "Full-stack website development",
                  "Contact & enquiry management",
                  "Shipment tracking system",
                  "Logistics service presentation",
                  "Responsive business interface",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-950 text-xs text-white">
                      ✓
                    </span>

                    <span className="text-sm font-medium text-slate-700">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <a
                href="https://gram-scs.onrender.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                View Live Website
              </a>
            </div>
          </div>

          {/* Client Review */}
          <div className="mt-10 rounded-3xl border border-slate-200 bg-white p-8">
            <p className="text-lg leading-8 text-slate-700">
              “⭐⭐⭐⭐⭐ Exceptional Full-Stack Development<br /> – A Game-Changer for Our Logistics Business!Working with Flovia systems to build our logistics platform has been an absolute game-changer. We approached them with a complex set of requirements, needing a comprehensive, full-stack solution that could handle everything from high-volume operations to customer acquisition. They delivered beyond our expectations.<br /><br />They seamlessly integrated a robust, real-time shipment tracking system that gives our clients total visibility over their cargo, which has drastically reduced our customer service inquiries. The built-in communication tools keep our dispatchers, drivers, and clients connected effortlessly, closing the gap on operational delays. On top of that, the lead generation architecture they implemented is already capturing and converting high-quality inbound shipping requests, helping us grow our pipeline from day one.<br /><br />The platform is lightning-fast, incredibly secure, and features a clean, intuitive interface that our team and customers love using. If you need a development team that truly understands complex workflows and transforms them into elegant, powerful digital solutions, look no further than Flovia systems.”
            </p>

            <p className="mt-4 text-sm font-semibold text-slate-900">
              — GRAM SCS
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 border-t border-white/10 px-6 py-7 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <div>
            <p className="font-bold text-white">Flovia</p>
            <p className="mt-1 text-sm text-slate-500">
              Lead capture & follow-up automation.
            </p>
          </div>

          <p className="text-sm text-slate-500">© 2026 Flovia</p>
        </div>
      </footer>
    </main>
  );
}