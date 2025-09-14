// pages/makers/[id].js
import makers from "../../data/makers.json";
import Head from "next/head";
import Link from "next/link";

export default function Maker({ maker }) {
  if (!maker) {
    return <main style={{padding:24,fontFamily:"system-ui"}}>Maker not found.</main>;
  }
  return (
    <div style={{minHeight:"100vh",fontFamily:"system-ui",background:"#fff",color:"#0f172a"}}>
      <Head><title>{maker.name} — Repurposed</title></Head>

      <header style={{borderBottom:"1px solid #e5e7eb"}}>
        <div style={{maxWidth:800,margin:"0 auto",padding:"12px 16px",
          display:"flex",alignItems:"center",justifyContent:"space-between"}}>
          <Link href="/" style={{textDecoration:"none",color:"inherit",fontWeight:600}}>Repurposed</Link>
          <Link href="/makers" style={{fontSize:14,textDecoration:"underline"}}>All makers</Link>
        </div>
      </header>

      <main style={{maxWidth:800,margin:"0 auto",padding:"32px 16px",
        display:"grid",gap:24,gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))"}}>
        <div>
          <div style={{
            width:"100%",aspectRatio:"1/1",borderRadius:16,border:"1px solid #e5e7eb",background:"#f1f5f9",
            backgroundImage:`url(${maker.photo})`,backgroundSize:"cover",backgroundPosition:"center"
          }} />
        </div>
        <div>
          <h1 style={{fontSize:28,margin:"0 0 4px"}}>{maker.name}</h1>
          <div style={{color:"#64748b",fontSize:14}}>{maker.suburb}</div>
          <p style={{marginTop:12,color:"#334155"}}>{maker.bio}</p>

          <div style={{marginTop:16,border:"1px solid #e5e7eb",borderRadius:16,padding:16,background:"#f8fafc"}}>
            <div style={{fontSize:14}}>Suggested price</div>
            <div style={{fontSize:28,fontWeight:800,marginTop:4}}>
              ${Number(maker.price_aud).toFixed(2)} AUD
            </div>
            <p style={{fontSize:12,color:"#64748b",marginTop:8}}>
              Every purchase supports the maker and program costs.
            </p>
            <div style={{marginTop:12,display:"flex",gap:8,flexWrap:"wrap"}}>
              <a href={maker.stripe_payment_link} target="_blank" rel="noreferrer"
                 style={{padding:"8px 12px",borderRadius:14,background:"#0f172a",color:"#fff",fontSize:14,textDecoration:"none"}}>
                Buy now
              </a>
              <button onClick={() => (navigator.share && navigator.share({
                        title: `${maker.name} — Repurposed`,
                        url: typeof window !== 'undefined' ? window.location.href : ''
                      }).catch(()=>{}))}
                      style={{padding:"8px 12px",borderRadius:14,border:"1px solid #e5e7eb",background:"#fff",fontSize:14}}>
                Share
              </button>
            </div>
            <p style={{fontSize:11,color:"#64748b",marginTop:8}}>
              QR tip: print this page’s URL on a can to link directly to this profile.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

export async function getStaticPaths() {
  const paths = makers.map(m => ({ params: { id: m.id } }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const maker = makers.find(m => m.id === params.id) || null;
  return { props: { maker } };
}
