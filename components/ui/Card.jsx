export default function Card({ title, children }) {
  return (
    <div className="rounded-2xl bg-white border p-5 shadow-sm">
      <div className="text-sm font-semibold">{title}</div>
      <div className="mt-2 text-sm text-slate-600">{children}</div>
    </div>
  );
}
