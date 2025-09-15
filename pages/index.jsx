import Head from "next/head";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      <Head>
        <title>Repurposed — Tin-Can Plant Social Enterprise</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Homeless participants upcycle tin cans into pot plants sold through local cafés. Scan to buy; proceeds support makers."
        />
      </Head>

      {/* Header */}
      <header className="sticky top-0 z-20 bg-white/80 backdrop-blur border-b">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-green-600" />
            <span className="font-semibold tracking-tight">Repurposed</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#how" className="hover:opacity-70">How it works</a>
            <a href="#partners" className="hover:opacity-70">For cafés</a>
            <a href="#councils" className="hover:opacity-70">For councils</a>
            <a href="#contact" className="hover:opacity-70">Contact</a>
          </nav>
          <a href="/makers" className="inline-flex items-center rounded-2xl px-4 py-2 bg-green-600 text-white text-sm font-medium shadow hover:shadow-md transition">
            Support a maker
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
              Tin-Can Plant Social Enterprise
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              Homeless participants upcycle tin cans into beautiful pot plants sold through local cafés.
              Sales support makers directly and create pathways to TAFE micro-credentials in horticulture or business.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="/makers" className="rounded-2xl px-5 py-3 bg-slate-900 text-white text-sm font-medium shadow hover:shadow-md transition">Support a maker</a>
              <a href="#how" className="rounded-2xl px-5 py-3 border text-sm font-medium hover:bg-slate-50 transition">How it works</a>
            </div>
            <div className="mt-6 text-xs text-slate-500">
              A program by and for our community — piloting with City of Melbourne partners.
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl border bg-[radial-gradient(ellipse_at_top_left,rgba(16,185,129,0.12),transparent_40%),radial-gradient(ellipse_at_bottom_right,rgba(15,23,42,0.06),transparent_40%)] flex items-center justify-center shadow-inner">
              <div className="w-[220px] h-[320px] bg-[url('https://images.unsplash.com/photo-1472145246862-b24cf25c4a36?q=80&w=600&auto=format&fit=crop')] bg-cover bg-center rounded-xl shadow" />
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="py-16 border-t bg-slate-50/60">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold">How it works</h2>
          <div className="mt-8 grid md:grid-cols-4 gap-6">
            {[
              { title: "Collect & clean", desc: "Cafés donate tins. Participants clean, de-label, and prep with safety in mind." },
              { title: "Plant & tag", desc: "Succulents/herbs planted; QR label links to maker’s profile and payment portal." },
              { title: "Display & sell", desc: "Cafés host a small display. Customers scan, read the story, and buy in seconds." },
              { title: "Pay & progress", desc: "Proceeds go to the maker with supports, mentoring, and TAFE pathways." },
            ].map((s, i) => (
              <div key={i} className="rounded-2xl bg-white border p-5 shadow-sm">
                <div className="text-sm font-semibold">{i + 1}. {s.title}</div>
                <p className="mt-2 text-sm text-slate-600">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner pathways */}
      <section id="partners" className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold">Partner pathways</h2>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <div className="rounded-2xl border p-6">
              <h3 className="font-semibold">For cafés</h3>
              <p className="mt-2 text-sm text-slate-600">Host a 3–6 can display; we supply plants, signage, and QR checkout.</p>
              <a href="#partner" className="inline-block mt-3 text-sm underline">Register interest →</a>
            </div>
            <div id="councils" className="rounded-2xl border p-6">
              <h3 className="font-semibold">For councils</h3>
              <p className="mt-2 text-sm text-slate-600">Co-design pilots, provide in-kind support, and create local training pathways with TAFE.</p>
              <a href="#contact" className="inline-block mt-3 text-sm underline">Start a conversation →</a>
            </div>
            <div className="rounded-2xl border p-6">
              <h3 className="font-semibold">For supporters</h3>
              <p className="mt-2 text-sm text-slate-600">Fund a tray of plants or sponsor micro-credentials.</p>
              <a href="/makers" className="inline-block mt-3 text-sm underline">Support a maker →</a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact / Register (Formspree) */}
      <section id="contact" className="py-16 border-t bg-slate-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="rounded-2xl bg-white border p-8 grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold">Say hello</h2>
              <p className="mt-2 text-sm text-slate-600">Questions, partnerships, or media enquiries: hello@repurposed.au</p>
              <form className="mt-4 grid gap-3" action="https://formspree.io/f/CONTACT_FORM_ID" method="POST">
                <input type="hidden" name="_subject" value="Repurposed — Contact form" />
                <input type="hidden" name="_redirect" value="/thanks" />
                <input className="border rounded-xl px-3 py-2" name="name" placeholder="Your name" required />
                <input className="border rounded-xl px-3 py-2" type="email" name="email" placeholder="Email" required />
                <textarea className="border rounded-xl px-3 py-2" name="message" placeholder="Message" rows="4" required />
                <input type="text" name="_gotcha" className="hidden" tabIndex="-1" autoComplete="off" />
                <input type="hidden" name="form_name" value="Contact" />
                <input type="hidden" name="source" value="repurposed.au" />
                <button type="submit" className="rounded-2xl px-4 py-2 bg-green-600 text-white w-fit">Send</button>
              </form>
            </div>
            <div id="partner">
              <h2 className="text-2xl font-bold">Register your café</h2>
              <p className="mt-2 text-sm text-slate-600">Leave your details and we’ll be in touch with a starter kit.</p>
              <form className="mt-4 grid gap-3" action="https://formspree.io/f/CAFE_FORM_ID" method="POST">
                <input type="hidden" name="_subject" value="Repurposed — Café interest" />
                <input type="hidden" name="_redirect" value="/thanks" />
                <input className="border rounded-xl px-3 py-2" name="cafe_name" placeholder="Café name" required />
                <input className="border rounded-xl px-3 py-2" name="location" placeholder="Suburb / City" required />
                <input className="border rounded-xl px-3 py-2" type="email" name="email" placeholder="Contact email" required />
                <input type="text" name="_gotcha" className="hidden" tabIndex="-1" autoComplete="off" />
                <input type="hidden" name="form_name" value="Cafe Interest" />
                <input type="hidden" name="source" value="repurposed.au" />
                <button type="submit" className="rounded-2xl px-4 py-2 bg-slate-900 text-white w-fit">Submit interest</button>
              </form>
            </div>
          </div>
          <p className="mt-4 text-[11px] text-slate-500">By submitting, you consent to be contacted about the Repurposed pilot. We respect your privacy.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t">
        <div className="max-w-6xl mx-auto px-4 py-8 text-sm text-slate-500 flex flex-col md:flex-row items-center justify-between gap-3">
          <div>© {new Date().getFullYear()} Repurposed — Melbourne, Australia</div>
          <div className="flex items-center gap-4">
            <a className="underline" href="#">Privacy</a>
            <a className="underline" href="#">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
