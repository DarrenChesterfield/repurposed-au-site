export default function NotFound() {
  return (
    <main style={{minHeight:'60vh',display:'grid',placeItems:'center',fontFamily:'system-ui'}}>
      <div style={{textAlign:'center'}}>
        <h1 style={{fontSize:'2rem',margin:0}}>Page not found</h1>
        <p style={{color:'#64748b'}}>Let’s get you back <a href="/">home</a>.</p>
      </div>
    </main>
  );
}
