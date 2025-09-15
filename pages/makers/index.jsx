import React from "react";

const makers = [
  {
    slug: "sample-maker",
    name: "Sample Maker",
    blurb:
      "Placeholder profile describing a participant’s role in planting, sanding, and labeling tins.",
    status: "Illustrative only",
  },
];

export default function MakersIndex() {
  return (
    <main className="min-h-screen max-w-5xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold">Makers</h1>
      <p className="mt-2 text-sm text-zinc-500">
        Participant stories will appear here. Profiles are illustrative only at this stage.
      </p>
      <ul className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {makers.map((m) => (
          <li key={m.slug} className="border rounded-2xl p-4">
            <div className="aspect-video bg-zinc-100 rounded-xl mb-3" />
            <h2 className="text-lg font-semibold">{m.name}</h2>
            <p className="text-sm text-zinc-600">{m.blurb}</p>
            <span className="inline-block mt-3 text-xs px-2 py-1 rounded-full bg-zinc-100">
              {m.status}
            </span>
          </li>
        ))}
      </ul>
    </main>
  );
}

