import React from "react";

export default function POSPage() {
  return (
    <main className="min-h-screen max-w-5xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold">Point of Sale</h1>
      <p className="mt-2 text-sm text-zinc-500">
        This page is an **illustrative placeholder** for the checkout and payment functionality.
        Eventually it will handle QR-code scanning and plant purchases in cafés.
      </p>

      <div className="mt-8 border rounded-2xl p-6 bg-zinc-50">
        <h2 className="text-xl font-semibold">Example purchase flow</h2>
        <ul className="list-disc ml-6 mt-2 text-sm text-zinc-600 space-y-1">
          <li>Customer scans the QR code on the tin can.</li>
          <li>This page shows the plant’s details and maker profile.</li>
          <li>Customer checks out securely, proceeds go to the maker.</li>
        </ul>
        <div className="mt-6 p-4 bg-white border rounded-xl text-sm text-zinc-500">
          Payment integration coming soon.
        </div>
      </div>
    </main>
  );
}

