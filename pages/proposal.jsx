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
              ["governance", "Governance & sa]()

