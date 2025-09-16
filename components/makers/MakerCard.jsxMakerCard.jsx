export default function MakerCard({ maker }) {
  return (
    <li className="border rounded-2xl p-4 bg-white shadow-sm hover:shadow-md transition">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={maker.avatar}
        alt={maker.name}
        className="w-full h-40 object-cover rounded-xl mb-3"
      />
      <h3 className="text-lg font-semibold">{maker.name}</h3>
      <p className="text-sm text-slate-600">{maker.blurb}</p>
      <span className="inline-block mt-3 text-xs px-2 py-1 rounded-full bg-zinc-100">
        {maker.status}
      </span>
    </li>
  );
}
