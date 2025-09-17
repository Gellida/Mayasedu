import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

const Navbar = () => (
  <header className={styles.header}>
    <div className={styles.logosGroup}>
      <div className={styles.logoContainer}>
        <Image src="/logo5.jpeg" alt="Logo" width={90} height={90} />
      </div>
      <div className={styles.logoContainer}>
        <Image src="/logo_ciela.png" alt="Logo2" width={80} height={80} />
      </div>
      <div className={styles.logoContainer}>
        <img src="/logo_chile.webp" width="90" height="80" alt="shield_icon"></img>
        {/* <Image src="/logo3.jpeg" alt="Logo3" width={60} height={60} /> */} 
      </div>
    </div>
    <nav className={styles.navMenu}>
      <Link href="/" className={styles.navTitle} style={{cursor: 'pointer', textDecoration: 'none', color: '#e6c24d', fontWeight: '700', fontSize: '1.2rem'}}>
        MAYAS EDU
      </Link>
  <Link className={styles.navLink} href="#">Investigación</Link>
  <Link className={styles.navLink} href="/transferir">Transferir</Link>
  <Link className={styles.navLink} href="#">Formación</Link>
      <Link className={styles.navLink} href="#">Noticias</Link>
      <Link className={styles.navLink} href="/unete">Únete a nosotros</Link>
    </nav>
  </header>
);

export default Navbar;
