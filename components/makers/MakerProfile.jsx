export default function MakerProfile({ maker }) {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold">{maker.name}</h1>
      <p className="mt-2 text-slate-600">{maker.blurb}</p>
    </div>
  );
}
