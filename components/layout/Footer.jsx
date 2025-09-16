export default function Footer() {
  return (
    <footer className="border-t bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 py-8 text-sm text-slate-500 flex flex-col md:flex-row items-center justify-between gap-3">
        <div>© {new Date().getFullYear()} Repurposed — Melbourne, Australia</div>
        <div className="flex items-center gap-4">
          <a className="underline" href="#">Privacy</a>
          <a className="underline" href="#">Terms</a>
        </div>
      </div>
    </footer>
  );
}
