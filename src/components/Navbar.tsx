import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  return (
    <header className={styles.header}>
      <div className={styles.logosGroup}>
        <div className={styles.logoContainer}>
          <Image src="/logo_mayasedu2.png" alt="Logo" width={60} height={60} style={{objectFit: 'cover'}} />
        </div>
        <div className={styles.extraLogos}>
          <div className={styles.logoContainer}>
            <Image src="/logo_ciela.png" alt="Logo2" width={60} height={60} />
          </div>
          <div className={styles.logoContainer}>
            <img src="/logo_chile.webp" width="70" height="60" alt="shield_icon" />
          </div>
        </div>
      </div>
      <button className={styles.menuToggle} aria-label="Abrir menú" onClick={() => setMenuOpen(v => !v)}>
        <span className={styles.menuIcon} />
      </button>
      <nav className={menuOpen ? styles.navMenuOpen : styles.navMenu}>
        <Link href="/" className={styles.navTitle} style={{ fontFamily: 'Mayan' }}>
          MAYA SEDU
        </Link>
  <Link className={styles.navLink} href="/investigaciones">Investigación</Link>
  <Link className={styles.navLink} href="/transferir">Transferir</Link>
  <Link className={styles.navLink} href="/formacion">Formación</Link>
  <div className={styles.navDropdown} style={{ position: 'relative' }}>
    <span
      className={styles.navLink}
      style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 4 }}
      onClick={() => setDropdownOpen(v => !v)}
      onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') setDropdownOpen(v => !v); }}
      tabIndex={0}
      aria-haspopup="true"
      aria-expanded={dropdownOpen ? 'true' : 'false'}
    >
      Información
      <span className={styles.arrow}>▼</span>
    </span>
    {dropdownOpen && (
      <div className="dropdown-content" style={{
        position: 'absolute',
        top: '100%',
        left: 0,
        background: 'rgba(24, 31, 21, 0.98)',
        borderRadius: '0 0 12px 12px',
        boxShadow: '0 8px 32px rgba(0,0,0,0.18)',
        zIndex: 1200,
        minWidth: 180,
        flexDirection: 'column',
        padding: '8px 0',
        display: 'flex',
      }}>
        <Link className={styles.navLink} href="/informacion">General</Link>
        <Link className={styles.navLink} href="/noticias">Noticias</Link>
        <Link className={styles.navLink} href="/cronograma">Cronograma</Link>
      </div>
    )}
  </div>
        <Link className={styles.navLink} href="/unete">Únete a nosotros</Link>
      </nav>
    </header>
  );
};

export default Navbar;
