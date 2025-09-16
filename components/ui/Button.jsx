export default function Button({ href, children }) {
  return (
    <a
      href={href}
      className="rounded-2xl px-5 py-3 bg-green-600 text-white text-sm font-medium shadow hover:shadow-md transition"
    >
      {children}
    </a>
  );
}
