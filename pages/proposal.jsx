import React from "react";

const Section = ({ id, title, children }) => (
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
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">Tin-Can Plant Social Enterprise Program</h1>
          <p className="mt-4 text-lg text-zinc-700">Repurposed cans. Local plants. Pathways for people doing it tough.</p>
          <p className="mt-2 text-sm text-zinc-500">
            This online proposal is a working draft for funders, shelters, and councils. Content is for illustrative purposes only,
            subject to partner support.
          </p>
        </div>
      </header>

      <nav className="sticky top-0 z-10 bg-white/80 backdrop-blur border-b">
        <div className="max-w-5xl mx-auto px-6 py-3 text-sm overflow-x-auto">
          <ul className="flex gap-4 whitespace-nowrap">
            {[
              ["problem", "Problem"],
              ["solution", "Program: how it works"],
              ["impact", "Impact & outcomes"],
              ["partners", "Partners & roles"],
              ["evidence", "Evidence: photos"],
              ["governance", "Governance & safety"],
              ["budget", "Indicative budget"],
              ["about", "About the proposer"],
              ["contact", "Contact"]
            ].map(([id, label]) => (
              <li key={id}><a className="text-zinc-700 hover:text-black" href={`#${id}`}>{label}</a></li>
            ))}
          </ul>
        </div>
      </nav>

      <Section id="problem" title="Problem">
        <p>
          Homelessness in metro Melbourne continues to rise, while tonnes of food-grade tin cans enter waste streams daily.
          Many people sleeping rough or in unstable accommodation want purposeful, low-barrier work and social connection.
          Cafés and councils want hyper-local sustainability projects that the community can see and support.
        </p>
      </Section>

      <Section id="solution" title="Program: how it works">
        <ol>
          <li><strong>Collect & prep cans</strong> from cafés and households. The weathered aesthetic is intentional; cans are cleaned and edges made safe.</li>
          <li><strong>Planting & micro-work</strong>—participants pot succulents/cacti and add sand/pebble top-dressings.</li>
          <li><strong>Point-of-sale in cafés</strong>—each can has a QR label that links to a POS page to purchase/sponsor on the spot.</li>
          <li><strong>Income pathway</strong>—funds flow to participant stipends, food vouchers, and program costs via partner oversight.</li>
          <li><strong>Scale with councils & shelters</strong>—micro-hubs in St Kilda and surrounding LGAs.</li>
        </ol>
      </Section>

      <Section id="impact" title="Impact & outcomes">
        <ul>
          <li><strong>Human</strong>: paid micro-tasks, confidence, routine, and pathways across horticulture, administration, and business.</li>
          <li><strong>Community</strong>: café-based visibility; residents can support with a simple scan.</li>
          <li><strong>Environment</strong>: extends useful life of cans and plants; hyper-local circularity.</li>
        </ul>
      </Section>

      <Section id="partners" title="Partners & roles (illustrative)">
        <ul>
          <li><strong>StreetSmart Australia</strong> – seed funding & governance advice.</li>
          <li><strong>St Kilda shelter</strong> – participant referrals and support.</li>
          <li><strong>City of Melbourne / neighbouring councils</strong> – permits, micro-hub space, and comms support.</li>
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
          ].map((src) => (
            <img key={src} src={src} alt="tin-can planter" className="w-full h-64 object-cover rounded-xl border" />
          ))}
        </div>
      </Section>

      <Section id="governance" title="Governance & safety (summary)">
        <ul>
          <li>Participant wellbeing via partner shelter oversight and voluntary, trauma-informed engagement.</li>
          <li>Safe can prep (de-burr edges), hygiene controls, and public-space guidelines.</li>
          <li>Transparent funds flow with receipts and regular reporting to partners.</li>
        </ul>
      </Section>

      <Section id="budget" title="Indicative budget (starter hub)">
        <p>Small-hub setup (tools, soil/sand, plants, QR labels), participant stipends/food vouchers, storage, and transport. Detailed line-item available on request.</p>
      </Section>

      <Section id="about" title="About the proposer">
        <p>
          Darren Chesterfield is a horticulture-driven social entrepreneur based in Melbourne. He placed in the 2024 Melbourne International Flower & Garden Show Balcony Garden Competition and has hands-on experience propagating succulents and cacti. Darren has led the prototyping shown above and is developing partnerships with local cafés, shelters, and councils to pilot the program.
        </p>
      </Section>

      <Section id="contact" title="Contact">
        <p>For partnering or funding conversations, please use the contact page. (No transactional call-to-action is included on this proposal by design.)</p>
      </Section>

      <footer className="border-t py-10 text-center text-xs text-zinc-500">© {new Date().getFullYear()} repurposed.au • Proposal page (illustrative only)</footer>
    </main>
  );
}
