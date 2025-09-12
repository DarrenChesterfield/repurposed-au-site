import makers from "@/data/makers.json";
import Head from "next/head";
import Link from "next/link";

export default function Maker({ maker }) {
  if (!maker) return <div className="p-8">Maker not found.</div>;

  return (
    <div className="min-h-screen bg-white text-slate-800">
      <Head><title>{maker.name} — Repurposed</title></Head>

      <header className="border-b">
        <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="/" className="font-semibold hover:opacity-70">Repurposed</Link>
          <Link href="/makers" className="text-sm underline">All makers</Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-8">
        <div className="md:col-span-1">
          <div
            className="w-full aspect-square rounded-2xl border bg-slate-100"
            style={{backgroundImage: `url(${maker.photo})`, backgroundSize: 'cover', backgroundPosition: 'center'}}
          />
        </div>
        <div className="md:col-span-2">
          <h1 className="text-3xl font-extrabold">{maker.name}</h1>
          <div className="text-slate-500 mt-1 text-sm">{maker.suburb}</div>
          <p className="mt-4 text-slate-700">{maker.bio}</p>

          <div className="mt-6 rounded-2xl border p-5 bg-slate-50">
            <div className="text-sm">Suggested price</div>
            <div className="text-3xl font-extrabold mt-1">${maker.price_aud.toFixed(2)} AUD</div>
            <p className="text-xs text-slate-500 mt-2">Every purchase supports the maker and program costs.</p>
            <div className="mt-4 flex gap-3">
              <a className="rounded-2xl px-4 py-2 bg-slate-900 text-white text-sm font-medium" href={maker.stripe_payment_link} target="_blank" rel="noreferrer">Buy now</a>
              <button className="rounded-2xl px-4 py-2 border text-sm" onClick={()=>navigator.share && navigator.share({ title: `${maker.name} — Repurposed`, url: typeof window !== 'undefined' ? window.location.href : '' }).catch(()=>{})}>Share</button>
            </div>
            <p className="text-[11px] text-slate-500 mt-3">QR tip: print this page’s URL on a can to link directly to this profile.</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export async function getStaticPaths() {
  const paths = makers.map(m => ({ params: { id: m.id } }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const maker = makers.find(m => m.id === params.id) || null;
  return { props: { maker } };
}
