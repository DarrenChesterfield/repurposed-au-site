import Link from "next/link";
import makers from "@/data/makers.json";

export default function Makers() {
  return (
    <main className="min-h-screen bg-white text-slate-800">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-extrabold">Support a maker</h1>
        <p className="mt-2 text-slate-600">Scan a can or browse makers below to learn more and purchase.</p>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {makers.map(m => (
            <Link key={m.id} href={`/makers/${m.id}`} className="rounded-2xl border p-6 hover:shadow-sm transition block">
              <div className="flex items-start gap-4">
                <div className="w-20 h-20 rounded-xl bg-slate-100 border" style={{backgroundImage: `url(${m.photo})`, backgroundSize: 'cover', backgroundPosition: 'center'}} />
                <div>
                  <div className="font-semibold">{m.name} — ${m.price_aud.toFixed(2)} AUD</div>
                  <div className="text-sm text-slate-600">{m.bio}</div>
                  <div className="text-xs text-slate-500 mt-1">{m.suburb}</div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
