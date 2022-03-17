import Link from 'next/link';
import styles from '../styles/NavBar.module.css';

const NavBar = () => {
  return (
    <nav>
      <ul className={styles.list}>
        <li className={styles.item}>
          <Link href='/'>
            <a className={styles.text}>HOME</a>
          </Link>
        </li>
        <li className={styles.item}>
          <Link href='/ssg'>
            <a className={styles.text}>SSG</a>
          </Link>
        </li>
        <li className={styles.item}>
          <Link href='/ssr'>
            <a className={styles.text}>SSR</a>
          </Link>
        </li>
        <li className={styles.item}>
          <Link href='/isr'>
            <a className={styles.text}>ISR</a>
          </Link>
        </li>
        <li className={styles.item}>
          <Link href='/cards'>
            <a className={styles.text}>CARDS</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
