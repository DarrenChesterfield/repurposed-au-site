export default function Section({ id, title, children }) {
  return (
    <section id={id} className="py-16 border-t bg-slate-50/60">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-bold">{title}</h2>
        {children}
      </div>
    </section>
  );
}
