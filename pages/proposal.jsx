import Head from "next/head";

export default function Proposal() {
  // Update this list whenever you add/remove images from /public/prototypes
  const photos = [
    "/prototypes/IMG_6341.jpg",
    "/prototypes/IMG_6343.jpg",
    "/prototypes/IMG_6351.jpg",
    "/prototypes/IMG_6359.jpg",
    "/prototypes/IMG_6937.jpg",
    "/prototypes/IMG_7197.jpg",
    "/prototypes/IMG_8305.jpg",
    "/prototypes/IMG_8308.jpg",
    "/prototypes/IMG_8958.jpg",
  ];

  return (
    <div className="min-h-screen bg-white text-slate-800">
      <Head>
        <title>Proposal – Repurposed</title>
        <meta
          name="description"
          content="Illustrative concept for the Tin-Can Plant Social Enterprise Program."
        />
      </Head>

      {/* Header */}
      <header className="sticky top-0 z-20 bg-white/80 backdrop-blur border-b">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-green-600" />
            <span className="font-semibold tracking-tight">Repurposed</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="/" className="hover:opacity-70">
              Home
            </a>
            <a href="/makers" className="hover:opacity-70">
              Makers
            </a>
            <a href="/pos" className="hover:opacity-70">
