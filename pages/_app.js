import '../styles/globals.css';
import Link from 'next/link';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link href='/'>
              <a>home</a>
            </Link>
          </li>
          <li>
            <Link href='/ssg'>
              <a>SSG</a>
            </Link>
          </li>
          <li>
            <Link href='/ssr'>
              <a>SSR</a>
            </Link>
          </li>
          <li>
            <Link href='/isr'>
              <a>ISR</a>
            </Link>
          </li>
        </ul>
      </nav>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
