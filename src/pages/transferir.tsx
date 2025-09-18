

import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styles from '../styles/Home.module.css';
import Link from 'next/link';


const recursos = [
  {
    title: 'Diccionarios y Traductores',
    desc: 'Herramientas digitales bilingües para lenguas mayas y español.',
    href: '/diccionarios',
    icon: '📖',
  },
  {
    title: 'Recursos Lingüísticos',
    desc: 'Materiales, audios y textos en lenguas originarias: Chol, Tzeltal, Tzotzil.',
    href: '/recursos-linguisticos',
    icon: '🔊',
  },
  {
    title: 'Síntesis y Reconocimiento del Habla',
    desc: 'Tecnología para síntesis y reconocimiento del habla en lenguas mayas.',
    href: '/sintesis-habla',
    icon: '🗣️',
  },
  {
    title: 'Aprendizaje de Lenguas Mayas',
    desc: 'Recursos y actividades para aprender Chol, Tzeltal y Tzotzil.',
    href: '/aprendizaje-lenguas',
    icon: '🎓',
  },
  {
    title: 'Arte y Cultura',
    desc: 'Procesos artísticos, culturales y creativos en escuelas y comunidades.',
    href: '/arte',
    icon: '🎨',
  },
];

const Transferir = () => (
  <div className={styles.landingBg} style={{ minHeight: '100vh', minWidth: 0 }}>
    <Navbar />
    <main style={{ padding: '60px 24px', background: 'transparent', minHeight: '100vh' }}>
      <h1 style={{ textAlign: 'center', fontWeight: 700, fontSize: '2.2rem', margin: '32px 0 12px', color: '#fff' }}>Transferir Conocimiento</h1>
      <p style={{ textAlign: 'center', fontSize: '1.15rem', marginBottom: 36, color: '#bdbdbd', maxWidth: 700, marginLeft: 'auto', marginRight: 'auto' }}>
        En este espacio promovemos la transferencia de recursos lingüísticos, culturales y tecnológicos. Compartir conocimiento es fortalecer nuestras lenguas y comunidades. Explora, descarga y comparte los siguientes recursos:
      </p>
      <section style={{
        display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 32, margin: '0 auto', maxWidth: 1100
      }}>
        {recursos.map((r) => (
          <Link key={r.href} href={r.href} passHref legacyBehavior>
            <a
              style={{
                background: '#232323',
                borderRadius: 14,
                boxShadow: '0 2px 16px rgba(0,0,0,0.13)',
                color: '#fffbe7',
                fontFamily: 'Montserrat, Arial, sans-serif',
                minWidth: 220,
                maxWidth: 270,
                padding: '32px 20px',
                textDecoration: 'none',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                transition: 'transform 0.18s',
                fontSize: '1.08rem',
                border: '1px solid #b6d44b33'
              }}
              onMouseOver={(e: React.MouseEvent<HTMLAnchorElement>) => {
                (e.currentTarget as HTMLAnchorElement).style.transform = 'scale(1.04)';
              }}
              onMouseOut={(e: React.MouseEvent<HTMLAnchorElement>) => {
                (e.currentTarget as HTMLAnchorElement).style.transform = 'scale(1)';
              }}
            >
              <span style={{ fontSize: 38, marginBottom: 12 }}>{r.icon}</span>
              <strong style={{ color: '#e6c24d', fontSize: '1.13rem', marginBottom: 8 }}>{r.title}</strong>
              <span style={{ color: '#bdbdbd', fontSize: '0.98rem' }}>{r.desc}</span>
            </a>
          </Link>
        ))}
      </section>
    </main>
    <Footer />
  </div>
);

export default Transferir;
