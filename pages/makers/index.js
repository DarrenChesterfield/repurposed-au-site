// pages/makers/index.js
import Link from "next/link";
import makers from "../../data/makers.json";

export default function Makers() {
  return (
    <main style={{minHeight:"100vh",fontFamily:"system-ui"}}>
      <div style={{maxWidth:960,margin:"0 auto",padding:"48px 16px"}}>
        <h1 style={{fontSize:28,margin:"0 0 8px"}}>Support a maker</h1>
        <p style={{color:"#64748b",margin:0}}>Browse makers to learn more and purchase.</p>

        <div style={{display:"grid",gap:16,gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))",marginTop:24}}>
          {makers.map(m => (
            <Link key={m.id} href={`/makers/${m.id}`} style={{textDecoration:"none",color:"inherit"}}>
              <div style={{border:"1px solid #e5e7eb",borderRadius:16,padding:16}}>
                <div style={{
                  width:80,height:80,borderRadius:12,background:"#f1f5f9",border:"1px solid #e5e7eb",
                  backgroundImage:`url(${m.photo})`,backgroundSize:"cover",backgroundPosition:"center"
                }} />
                <div style={{marginTop:12,fontWeight:600}}>
                  {m.name} — ${Number(m.price_aud).toFixed(2)} AUD
                </div>
                <div style={{fontSize:14,color:"#475569"}}>{m.bio}</div>
                <div style={{fontSize:12,color:"#64748b",marginTop:4}}>{m.suburb}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
