// pages/proposal.jsx
import PageShell from "@/components/layout/PageShell";
import Section from "@/components/ui/Section";

export default function Proposal() {
  const TOC = [
    ["exec", "Executive Summary"],
    ["partner", "About Sacred Heart Mission partnership"],
    ["model", "Program Model (How it Works)"],
    ["participants", "Participant Pathways & Safety"],
    ["pos", "Op Shop Display / POS Flow"],
    ["timeline", "Pilot Timeline"],
    ["budget", "Indicative Budget"],
    ["governance", "Governance & Evaluation"],
    ["about", "About the Proposer"],
    ["contact", "Contact / Next Steps"],
  ];

  return (
    <PageShell
      title="Sacred Heart Mission Pilot — Proposal"
      description="Illustrative proposal to pilot the Repurposed tin-can plant micro-enterprise with Sacred Heart Mission op shops."
    >
      {/* Sticky TOC */}
      <nav className="sticky top-0 z-10 bg-white/80 backdrop-blur border-b">
        <div className="max-w-5xl mx-auto px-6 py-3 overflow-x-auto text-sm">
          <ul className="flex gap-4 whitespace-nowrap">
            {TOC.map(([id, label]) => (
              <li key={id}>
                <a className="text-slate-700 hover:text-black" href={`#${id}`}>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <Section id="exec" title="Executive Summary">
        <p>
          <strong>Repurposed</strong> is a micro-enterprise converting food-grade tins into small
          planters sold through local outlets. We propose piloting this program with{" "}
          <strong>Sacred Heart Mission (SHM) op shops</strong> as the first sales points, giving SHM
          clients the chance to earn stipends or vouchers through low-barrier, creative micro-tasks.
        </p>
        <p>
          With SHM’s <em>in-principle support</em>, we will then seek third-party funding to scale
          the model and extend distribution to City of Melbourne cafés and additional partners.
          Content below is illustrative and subject to partner input.
        </p>
      </Section>

      <Section id="partner" title="About Sacred Heart Mission partnership">
        <ul>
          <li>
            <strong>Trusted access</strong> to participants and supportive, trauma-informed spaces.
          </li>
          <li>
            <strong>Existing retail footprint</strong> via SHM op shops to test in-store displays
            and QR checkout.
          </li>
          <li>
            <strong>Values alignment</strong> in inclusion, dignity, circular economy and community
            connection.
          </li>
        </ul>
      </Section>

      <Section id="model" title="Program Model (How it Works)">
        <ol>
          <li>
            <strong>Collection & prep</strong> — clean tins gathered from cafés/households or SHM
            kitchens; de-label and smooth edges.
          </li>
          <li>
            <strong>Planting & labelling</strong> — participants plant succulents/herbs; apply QR
            codes and care info.
          </li>
          <li>
            <strong>Op shop display</strong> — small, tidy displays (5–10 plants) with explanatory
            signage.
          </li>
          <li>
            <strong>Purchase flow</strong> — customers buy in-store or via QR; funds routed to
            participant stipends/food vouchers and program costs under partner oversight.
          </li>
          <li>
            <strong>Pathways</strong> — optional micro-credentials (horticulture/admin/retail) in
            partnership with TAFE.
          </li>
        </ol>
      </Section>

      <Section id="participants" title="Participant Pathways & Safety">
        <ul>
          <li>
            <strong>Opt-in only</strong> for SHM clients interested in short, creative tasks and
            social connection.
          </li>
          <li>
            <strong>On-site supports</strong> — SHM staff present; sessions structured and
            voluntary.
          </li>
          <li>
            <strong>Stipends or food vouchers</strong> processed via SHM systems.
          </li>
          <li>
            <strong>Progression</strong> toward training, volunteering or paid work pathways.
          </li>
        </ul>
      </Section>

      <Section id="pos" title="Op Shop Display / POS Flow">
        <ul>
          <li>
            Compact display with clear <em>“Scan to Support”</em> messaging and care instructions.
          </li>
          <li>
            Each tin carries a QR linking to maker stories and checkout (initially hosted by
            Repurposed; future integration with SHM).
          </li>
          <li>
            Simple, low-friction purchase for customers; transparent receipts and reporting.
          </li>
        </ul>
      </Section>

      <Section id="timeline" title="Pilot Timeline (illustrative)">
        <div className="overflow-x-auto">
          <table>
            <thead>
              <tr>
                <th>Month</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Confirm SHM participation; set up prep space; staff orientation.</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Produce first batch with participants; install displays in 1–2 op shops.</td>
              </tr>
              <tr>
                <td>3–4</td>
                <td>Evaluate & refine; expand to more SHM shops; prepare funding application.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Section>

      <Section id="budget" title="Indicative Budget (pilot hub)">
        <p>
          Figures below are indicative and will be refined with SHM. We seek SHM’s in-principle
          support (space, participant access, staff time) plus assistance to secure third-party
          funding for materials.
        </p>
        <div className="overflow-x-auto">
          <table>
            <thead>
              <tr>
                <th>Item</th>
                <th>Notes</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Starter kit</td>
                <td>Tools, PPE, soil/sand, labels, safety equipment</td>
              </tr>
              <tr>
                <td>Plants & materials</td>
                <td>Initial stock for ~100 planters (mix of propagated/purchased)</td>
              </tr>
              <tr>
                <td>Participant stipends / vouchers</td>
                <td>Per-session support administered with SHM</td>
              </tr>
              <tr>
                <td>Signage & QR</td>
                <td>Design/print signage; QR hosting & links</td>
              </tr>
              <tr>
                <td>Logistics</td>
                <td>Storage and transport between prep space and shops</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-slate-500">
          Detailed budget available on request; all figures are illustrative until partners confirm.
        </p>
      </Section>

      <Section id="governance" title="Governance & Evaluation">
        <ul>
          <li>
            <strong>Oversight</strong> via SHM program staff and Repurposed founder; transparent
            reporting of units produced, participant sessions and funds disbursed.
          </li>
          <li>
            <strong>Safety & insurance</strong> within SHM frameworks; safe tool use and hygiene
            controls; public-display guidelines.
          </li>
          <li>
            <strong>Evaluation</strong> with simple metrics: makers engaged, cans repurposed, shops
            participating, $ to participants.
          </li>
        </ul>
      </Section>

      <Section id="about" title="About the Proposer">
        <p>
          Darren Chesterfield is a horticulture-driven social entrepreneur based in Melbourne. He
          placed in the 2024 Melbourne International Flower & Garden Show Balcony Garden
          Competition, has hands-on propagation experience with succulents and cacti, and led the
          prototyping that underpins this pilot proposal.
        </p>
      </Section>

      <Section id="contact" title="Contact / Next Steps">
        <p>
          If Sacred Heart Mission is interested, we seek an email or letter of{" "}
          <strong>in-principle support</strong> to co-develop a pilot and join us in approaching
          third-party funders.
        </p>
        <p>
          Email:{" "}
          <a href="mailto:hello@repurposed.au" className="underline">
            hello@repurposed.au
          </a>
        </p>
        <p className="text-xs text-slate-500">
          This page is an illustrative draft pending partner support.
        </p>
      </Section>
    </PageShell>
  );
}
