export default function Header() {
  return (
    <header className="sticky top-0 z-20 bg-white/80 backdrop-blur border-b">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-green-600" />
          <span className="font-semibold tracking-tight">Repurposed</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="/" className="hover:opacity-70">Home</a>
          <a href="/makers" className="hover:opacity-70">Makers</a>
          <a href="/pos" className="hover:opacity-70">POS</a>
          <a href="/proposal" className="hover:opacity-70">Proposal</a>
        </nav>
      </div>
    </header>
  );
}
