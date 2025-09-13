export default function Custom404() {
  return (
    <main style={{minHeight:'60vh',display:'grid',placeItems:'center',fontFamily:'system-ui'}}>
      <div style={{textAlign:'center'}}>
        <h1 style={{fontSize:'2rem',margin:0}}>404 – Page not found</h1>
        <p style={{color:'#64748b'}}><a href="/">Go home</a></p>
      </div>
    </main>
  );
}
