// =============================
// Next.js (pages router) stubs
// Files to add to your repo
// Tailwind ready, no extra libs required
// =============================

// ---------- pages/proposal.tsx ----------
import React from "react";

const Section: React.FC<{ id?: string; title: string; children: React.ReactNode }>
  = ({ id, title, children }) => (
  <section id={id} className="max-w-5xl mx-auto px-6 py-12">
    <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-4">{title}</h2>
    <div className="prose prose-neutral max-w-none">
      {children}
    </div>
  </section>
);

export default function ProposalPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <header className="bg-gradient-to-b from-zinc-50 to-white border-b">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <p className="text-sm uppercase tracking-widest text-zinc-500">Illustrative concept</p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">Tin‑Can Plant Social Enterprise Program</h1>
          <p className="mt-4 text-lg text-zinc-700">Repurposed cans. Local plants. Pathways for people doing it tough.</p>
          <p className="mt-2 text-sm text-zinc-500">This online proposal is a working draft for funders, shelters, and councils. Content is for illustrative purposes only, subject to partner support.</p>
        </div>
      </header>

      <nav className="sticky top-0 z-10 bg-white/80 backdrop-blur border-b">
        <div className="max-w-5xl mx-auto px-6 py-3 text-sm overflow-x-auto">
          <ul className="flex gap-4 whitespace-nowrap">
            {[
              ["problem","Problem"],
              ["solution","Program: how it works"],
              ["impact","Impact & outcomes"],
              ["partners","Partners & roles"],
              ["evidence","Evidence: photos"],
              ["governance","Governance & safety"],
              ["budget","Indicative budget"],
              ["about","About the proposer"],
              ["contact","Contact"]
            ].map(([id,label])=> (
              <li key={id}><a className="text-zinc-700 hover:text-black" href={`#${id}`}>{label}</a></li>
            ))}
          </ul>
        </div>
      </nav>

      <Section id="problem" title="Problem">
        <p>
          Homelessness in metro Melbourne continues to rise, while tonnes of food‑grade tin cans enter waste streams daily. Many people sleeping rough or in unstable accommodation want purposeful, low‑barrier work and social connection. Cafés and councils want hyper‑local sustainability projects that the community can see and support.
        </p>
      </Section>

      <Section id="solution" title="Program: how it works">
        <ol>
          <li><strong>Collect & prep cans</strong> from cafés and households. The weathered aesthetic is intentional; cans are cleaned and edges made safe.</li>
          <li><strong>Planting & micro‑work</strong>—participants pot succulents/cacti and add sand/pebble top‑dressings.</li>
          <li><strong>Point‑of‑sale in cafés</strong>—each can has a QR label that links to a POS page to purchase/sponsor on the spot.</li>
          <li><strong>Income pathway</strong>—funds flow to participant stipends, food vouchers, and program costs via partner oversight.</li>
          <li><strong>Scale with councils & shelters</strong>—micro‑hubs in St Kilda and surrounding LGAs.</li>
        </ol>
      </Section>

      <Section id="impact" title="Impact & outcomes">
        <ul>
          <li><strong>Human</strong>: paid micro‑tasks, confidence, routine, and pathways across <em>horticulture</em>, <em>administration</em>, and <em>business</em>.</li>
          <li><strong>Community</strong>: café‑based visibility; residents can support with a simple scan.</li>
          <li><strong>Environment</strong>: extends useful life of cans and plants; hyper‑local circularity.</li>
        </ul>
      </Section>

      <Section id="partners" title="Partners & roles (illustrative)">
        <ul>
          <li><strong>StreetSmart Australia</strong> – seed funding & governance advice.</li>
          <li><strong>St Kilda shelter</strong> – participant referrals and support.</li>
          <li><strong>City of Melbourne / neighbouring councils</strong> – permits, micro‑hub space, and comms support.</li>
          <li><strong>Cafés</strong> – collection points and POS display.</li>
        </ul>
      </Section>

      <Section id="evidence" title="Evidence: real photos of prototypes">
        <p>Below are real program prototypes. Replace the <code>src</code> values with images placed in <code>/public/prototypes</code>.</p>
        <div className="grid md:grid-cols-3 gap-4 not-prose">
          {[
            "/prototypes/IMG_6316.jpg",
            "/prototypes/IMG_6341.jpg",
            "/prototypes/IMG_6343.jpg",
            "/prototypes/IMG_6351.jpg",
            "/prototypes/IMG_6359.jpg",
            "/prototypes/IMG_6937.jpg",
            "/prototypes/IMG_7197.jpg",
            "/prototypes/IMG_8305.jpg",
            "/prototypes/IMG_8308.jpg",
            "/prototypes/IMG_8958.jpg",
          ].map((src)=> (
            <img key={src} src={src} alt="tin‑can planter" className="w-full h-64 object-cover rounded-xl border" />
          ))}
        </div>
      </Section>

      <Section id="governance" title="Governance & safety (summary)">
        <ul>
          <li>Participant wellbeing via partner shelter oversight and voluntary, trauma‑informed engagement.</li>
          <li>Safe can prep (de‑burr edges), hygiene controls, and public‑space guidelines.</li>
          <li>Transparent funds flow with receipts and regular reporting to partners.</li>
        </ul>
      </Section>

      <Section id="budget" title="Indicative budget (starter hub)">
        <p>Small‑hub setup (tools, soil/sand, plants, QR labels), participant stipends/food vouchers, storage, and transport. Detailed line‑item available on request.</p>
      </Section>

      <Section id="about" title="About the proposer">
        <p>
          Darren Chesterfield is a horticulture‑driven social entrepreneur based in Melbourne. He placed in the 2024 Melbourne International Flower & Garden Show Balcony Garden Competition and has hands‑on experience propagating succulents and cacti. Darren has led the prototyping shown above and is developing partnerships with local cafés, shelters, and councils to pilot the program.
        </p>
      </Section>

      <Section id="contact" title="Contact">
        <p>For partnering or funding conversations, please use the contact page. (No transactional call‑to‑action is included on this proposal by design.)</p>
      </Section>

      <footer className="border-t py-10 text-center text-xs text-zinc-500">© {new Date().getFullYear()} repurposed.au • Proposal page (illustrative only)</footer>
    </main>
  );
}

// ---------- pages/pos.tsx ----------
import React from "react";

export function POS() {
  return (
    <main className="min-h-screen max-w-xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold">Purchase this planter</h1>
      <p className="mt-2 text-sm text-zinc-500">Illustrative POS page. Payments are not live yet—subject to partner support and approvals.</p>

      {/* Product card */}
      <div className="mt-8 border rounded-2xl p-4">
        <div className="aspect-video w-full bg-zinc-100 rounded-xl mb-4 flex items-center justify-center text-zinc-400">Product image</div>
        <h2 className="text-xl font-semibold">Tin‑Can Succulent (QR‑linked)</h2>
        <p className="text-sm text-zinc-600">Locally made through the Tin‑Can Plant Social Enterprise Program.</p>
        <div className="mt-4 flex items-end justify-between">
          <div>
            <div className="text-2xl font-bold">$25</div>
            <div className="text-xs text-zinc-500">incl. GST if applicable</div>
          </div>
          <button className="px-4 py-2 rounded-xl bg-zinc-900 text-white" disabled>Coming soon</button>
        </div>
      </div>

      {/* Policy blurb */}
      <div className="mt-6 text-xs text-zinc-500">
        <p>No payments are processed on this page yet. When live, your purchase will fund participant stipends/food vouchers and program costs via partner oversight. Refunds/collection details will be provided at checkout.</p>
      </div>
    </main>
  );
}

export default POS;

// ---------- pages/makers/index.tsx ----------
import React from "react";

const makers = [
  {
    slug: "sample-maker",
    name: "Sample Maker",
    blurb: "This is a placeholder profile describing a participant’s role in planting, sanding, and labeling tins.",
    status: "Illustrative only",
  }
];

export default function MakersIndex() {
  return (
    <main className="min-h-screen max-w-5xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold">Makers</h1>
      <p className="mt-2 text-sm text-zinc-500">Participant stories will appear here. Profiles are illustrative only at this stage.</p>
      <ul className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {makers.map(m => (
          <li key={m.slug} className="border rounded-2xl p-4">
            <div className="aspect-video bg-zinc-100 rounded-xl mb-3"></div>
            <h2 className="text-lg font-semibold">{m.name}</h2>
            <p className="text-sm text-zinc-600">{m.blurb}</p>
            <span className="inline-block mt-3 text-xs px-2 py-1 rounded-full bg-zinc-100">{m.status}</span>
          </li>
        ))}
      </ul>
    </main>
  );
}

// ---------- pages/_app.tsx (ensure Tailwind/globals are loaded) ----------
import type { AppProps } from 'next/app'
import '../styles/globals.css'

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

// ---------- styles/globals.css ----------
/* Tailwind base (assumes Tailwind set up) */
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Basic prose tweaks */
.prose a { @apply text-zinc-900 underline; }

// ---------- public/prototypes/ (add these files) ----------
// IMG_6316.jpg, IMG_6341.jpg, IMG_6343.jpg, IMG_6351.jpg, IMG_6359.jpg,
// IMG_6937.jpg, IMG_7197.jpg, IMG_8305.jpg, IMG_8308.jpg, IMG_8958.jpg
// (Copy your real images into this folder; names should match.)
