const whatsappNumber = "919999999999";

const whatsappMessage = encodeURIComponent(
    "Hi Flovia, I want to know more about your lead capture and follow-up system."
);

const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

const features = [
    "Professional lead capture website",
    "WhatsApp enquiry integration",
    "Automatic lead storage",
    "Instant lead notifications",
    "Simple follow-up system",
];

const steps = [
    {
        number: "01",
        title: "Customer visits",
        description: "Your customer lands on your website or offer page.",
    },
    {
        number: "02",
        title: "Customer enquires",
        description: "They submit their details or contact you on WhatsApp.",
    },
    {
        number: "03",
        title: "Lead is captured",
        description: "The enquiry is organized and stored automatically.",
    },
    {
        number: "04",
        title: "You follow up",
        description: "You get notified and can follow up while the lead is fresh.",
    },
];

export default function OfferPage() {
    return (
        <main className="min-h-screen bg-white text-slate-950">
            {/* Navbar */}
            <header className="border-b border-slate-800 bg-slate-950 text-white">
                <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
                    <a
                        href="/"
                        className="text-xl font-bold tracking-tight text-white"
                    >
                        Flovia
                    </a>

                    <nav className="flex items-center gap-3">
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
                            className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-slate-200"
                        >
                            Get a Demo
                        </a>
                    </nav>
                </div>
            </header>

            {/* Hero */}
            {/* Hero */}
            <section className="border-b border-slate-100">
                <div className="mx-auto max-w-5xl px-6 py-14 text-center sm:py-20">
                    <div className="mb-5 inline-flex rounded-full border border-slate-300 bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700">
                        Lead Capture & Follow-up Systems
                    </div>

                    <h1 className="mx-auto max-w-4xl text-4xl font-bold tracking-tight sm:text-6xl">
                        Turn more enquiries into customers.
                    </h1>

                    <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
                        Flovia builds simple systems that help businesses capture,
                        organize and follow up with their enquiries without losing leads.
                    </p>

                    <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                        <a
                            href={whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-full bg-slate-950 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-slate-800"
                        >
                            Get Started on WhatsApp
                        </a>

                        <a
                            href="/"
                            className="rounded-full border border-slate-200 px-7 py-3.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
                        >
                            Back to Flovia
                        </a>
                    </div>
                </div>
            </section>

            {/* Offer */}
            <section className="mx-auto max-w-6xl px-6 py-20">
                <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                            What you get
                        </p>

                        <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                            A simple system for handling your enquiries.
                        </h2>

                        <p className="mt-5 max-w-xl leading-7 text-slate-600">
                            Instead of enquiries getting lost across forms, WhatsApp and
                            spreadsheets, Flovia connects the important parts into one
                            simple workflow.
                        </p>

                        <a
                            href={whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-7 inline-flex rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
                        >
                            Discuss Your Business
                        </a>
                    </div>

                    <div className="rounded-3xl border border-slate-200 bg-slate-50 p-7">
                        <div className="space-y-4">
                            {features.map((feature) => (
                                <div
                                    key={feature}
                                    className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4"
                                >
                                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-950 text-sm text-white">
                                        ✓
                                    </div>

                                    <span className="font-medium text-slate-800">{feature}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* How it works */}
            <section className="border-y border-slate-100 bg-slate-50">
                <div className="mx-auto max-w-6xl px-6 py-20">
                    <div className="max-w-2xl">
                        <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                            How it works
                        </p>

                        <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                            From enquiry to follow-up.
                        </h2>
                    </div>

                    <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                        {steps.map((step) => (
                            <div
                                key={step.number}
                                className="rounded-3xl border border-slate-200 bg-white p-6"
                            >
                                <span className="text-sm font-bold text-slate-400">
                                    {step.number}
                                </span>

                                <h3 className="mt-6 text-lg font-semibold">{step.title}</h3>

                                <p className="mt-3 text-sm leading-6 text-slate-600">
                                    {step.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Who it's for */}
            <section className="mx-auto max-w-6xl px-6 py-20">
                <div className="text-center">
                    <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                        Built for businesses
                    </p>

                    <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                        Who can use Flovia?
                    </h2>

                    <p className="mx-auto mt-5 max-w-2xl text-slate-600">
                        Flovia is especially useful for businesses where every enquiry can
                        become a potential customer.
                    </p>
                </div>

                <div className="mx-auto mt-10 grid max-w-3xl gap-5 sm:grid-cols-2">
                    <div className="rounded-3xl border border-slate-200 p-8">
                        <div className="text-3xl">🏠</div>
                        <h3 className="mt-5 text-xl font-semibold">Real Estate</h3>
                        <p className="mt-3 leading-7 text-slate-600">
                            Capture property enquiries and make it easier for your team to
                            respond and follow up.
                        </p>
                    </div>

                    <div className="rounded-3xl border border-slate-200 p-8">
                        <div className="text-3xl">🎓</div>
                        <h3 className="mt-5 text-xl font-semibold">Coaching</h3>
                        <p className="mt-3 leading-7 text-slate-600">
                            Capture student enquiries and organize potential customers
                            before they get lost.
                        </p>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="px-6 pb-20">
                <div className="mx-auto max-w-5xl rounded-3xl bg-slate-950 px-6 py-16 text-center text-white sm:px-12">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                        Ready to stop losing enquiries?
                    </h2>

                    <p className="mx-auto mt-4 max-w-xl leading-7 text-slate-300">
                        Tell us about your business and we can show you how a simple lead
                        capture and follow-up system could work for you.
                    </p>

                    <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-8 inline-flex rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-slate-200"
                    >
                        Get a Demo on WhatsApp
                    </a>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t border-slate-100">
                <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <div className="font-semibold text-slate-900">Flovia</div>
                        <div>Lead capture & follow-up automation.</div>
                    </div>

                    <div>© 2026 Flovia</div>
                </div>
            </footer>
        </main>
    );
}