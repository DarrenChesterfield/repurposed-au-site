import PageShell from "@/components/layout/PageShell";
import Section from "@/components/ui/Section";

export default function Proposal() {
  const TOC = [
    ["exec", "Executive Summary"],
    ["problem", "Problem & Opportunity"],
    ["model", "Program Model"],
    ["impact", "Impact & Outcomes"],
    ["partners", "Partners & Roles"],
    ["governance", "Governance & Safety"],
    ["pilot", "Pilot Plan & Timeline"],
    ["budget", "Indicative Budget"],
    ["about", "About the Proposer"],
    ["contact", "Contact"],
  ];

  return (
    <PageShell
      title="Proposal"
      description="Illustrative proposal for partners and funders"
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
          <strong>Repurposed</strong> is a Melbourne micro-enterprise turning food-grade tins into
          small planters sold via cafés. It creates low-barrier, paid micro-tasks and social
          connection for people doing it tough, while delivering visible circular economy wins in
          local venues. This document outlines the problem, model, outcomes, partners, safety, and
          a pilot plan with indicative costs. All content is illustrative and subject to partner
          support.
        </p>
      </Section>

      <Section id="problem" title="Problem & Opportunity">
        <ul>
          <li>Rising homelessness; need for purposeful, short-shift, safe tasks with support.</li>
          <li>Thousands of clean cans enter waste streams; cafés want visible local sustainability.</li>
          <li>Community appetite to support directly at point of purchase (scan-to-buy on table).</li>
        </ul>
      </Section>

      <Section id="model" title="Program Model (How it works)">
        <ol>
          <li>
            <strong>Collect & prep cans</strong> from cafés/households; clean, de-label, and smooth
            edges.
          </li>
          <li>
            <strong>Planting</strong> succulents/cacti; sand/pebble top-dressings; QR label applied.
          </li>
          <li>
            <strong>Point-of-sale via QR</strong> in cafés; customers scan to sponsor/purchase on the spot.
          </li>
          <li>
            <strong>Funds flow</strong> to participant stipends/food vouchers and program costs under
            partner oversight.
          </li>
          <li>
            <strong>Pathways</strong> to TAFE micro-credentials (horticulture, administration, business).
          </li>
        </ol>
      </Section>

      <Section id="impact" title="Impact & Outcomes">
        <ul>
          <li>
            <strong>Human</strong>: paid micro-tasks, routine, agency, and progression goals.
          </li>
          <li>
            <strong>Community</strong>: café-based visibility; simple “scan to support”.
          </li>
          <li>
            <strong>Environment</strong>: reused materials; hyper-local circularity.
          </li>
        </ul>
        <p className="text-sm text-slate-500">
          Metrics (illustrative): makers engaged, cans repurposed, café partners, and $ distributed
          to participants.
        </p>
      </Section>

      <Section id="partners" title="Partners & Roles (illustrative)">
        <ul>
          <li><strong>StreetSmart Australia</strong> — seed funding advice, governance.</li>
          <li><strong>St Kilda shelter</strong> — participant referrals, supports.</li>
          <li><strong>City of Melbourne</strong> — permits, micro-hub space, comms.</li>
          <li><strong>Cafés</strong> — collection points and POS display.</li>
        </ul>
      </Section>

      <Section id="governance" title="Governance & Safety">
        <ul>
          <li>Trauma-informed, voluntary participation; duty of care via shelter partner.</li>
          <li>Safe can prep (de-burr), hygiene controls, and public-space guidelines.</li>
          <li>Transparent receipts/reporting; independent oversight.</li>
        </ul>
      </Section>

      <Section id="pilot" title="Pilot Plan & Timeline (illustrative)">
        <ol>
          <li><strong>Month 1:</strong> partner sign-on; café recruitment; materials.</li>
          <li><strong>Months 2–3:</strong> initial production; deploy POS in cafés.</li>
          <li><strong>Months 4–6:</strong> scale to more cafés; start micro-credentials.</li>
        </ol>
      </Section>

      <Section id="budget" title="Indicative Budget (starter hub)">
        <p>
          Line items (illustrative): tools & PPE; plants & soil; QR labels; participant
          stipends/food vouchers; storage; transport; reporting.
        </p>
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
              <td>tools, PPE, soil/sand, labels</td>
            </tr>
            <tr>
              <td>Plants</td>
              <td>propagation + purchased stock</td>
            </tr>
            <tr>
              <td>Stipends/food vouchers</td>
              <td>per maker per session</td>
            </tr>
            <tr>
              <td>Logistics</td>
              <td>storage, transport</td>
            </tr>
          </tbody>
        </table>
        <p className="text-xs text-slate-500">
          Detailed budget available on request; all figures illustrative until partners confirm.
        </p>
      </Section>

      <Section id="about" title="About the Proposer">
        <p>
          Darren Chesterfield is a horticulture-driven social entrepreneur based in Melbourne. He
          placed in the 2024 Melbourne International Flower & Garden Show Balcony Garden Competition
          and has hands-on experience propagating succulents and cacti. Darren led the prototyping
          of the tin-can planter concept and is developing partnerships with local cafés, shelters,
          and councils.
        </p>
      </Section>

      <Section id="contact" title="Contact">
        <p>
          Partnerships & funding:{" "}
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
