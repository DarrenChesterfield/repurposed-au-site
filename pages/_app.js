// pages/_app.js
import '../styles/globals.css'; // This points to styles/globals.css at the root of your repo

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
