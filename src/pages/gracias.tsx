import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styles from '../styles/Contacto.module.css';

export default function Gracias() {
  return (
    <div className={styles.landingBg}>
      <Navbar />
      <main style={{ padding: '60px 24px', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: 'transparent' }}>
        <h1 className={styles.contactTitle} style={{ marginBottom: 18 }}>¡Gracias por contactarnos!</h1>
        <p className={styles.contactDesc} style={{ fontSize: '1.2rem', maxWidth: 500 }}>
          Hemos recibido tu mensaje y nos pondremos en contacto contigo pronto.
        </p>
      </main>
      <Footer />
    </div>
  );
}
