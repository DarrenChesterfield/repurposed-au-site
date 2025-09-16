import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

export default function PageShell({ title, description, children }) {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      <Head>
        <title>{title ? `${title} – Repurposed` : "Repurposed"}</title>
        {description && <meta name="description" content={description} />}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
