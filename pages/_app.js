import '../styles/globals.css';
import Link from 'next/link';
import NavBar from '../components/NavBar';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
