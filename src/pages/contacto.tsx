
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styles from '../styles/Home.module.css';

const Contacto = () => (
  <div className={styles.landingBg} style={{ minHeight: '100vh', minWidth: 0 }}>
    <Navbar />
    <main style={{ padding: '60px 24px', background: 'transparent', minHeight: '100vh' }}>
      <h1 style={{ textAlign: 'center', fontWeight: 700, fontSize: '2.5rem', margin: '32px 0 12px', color: '#fff' }}>Contacto</h1>
      <p style={{ textAlign: 'center', fontSize: '1.15rem', marginBottom: 36, color: '#bdbdbd' }}>
        ¿Quieres suscribirte o ponerte en contacto con nosotros? Completa el siguiente formulario y te responderemos pronto.
      </p>
      <section style={{ display: 'flex', justifyContent: 'center' }}>
        <form style={{
          maxWidth: 500,
          width: '100%',
          background: '#232323',
          borderRadius: 12,
          padding: '32px 24px',
          boxShadow: '0 2px 16px rgba(0,0,0,0.13)',
          color: '#fffbe7',
          fontFamily: 'Montserrat, Arial, sans-serif',
        }}>
          <div style={{ marginBottom: 24 }}>
            <label htmlFor="name" style={{ display: 'block', marginBottom: 8, fontWeight: 500 }}>
              Nombre <span style={{ color: '#e53935' }}>*</span>
            </label>
            <input id="name" name="name" type="text" required style={{
              width: '100%', padding: 10, borderRadius: 6, border: '1px solid #bdbdbd', fontSize: 16, background: '#181f15', color: '#fff'
            }} />
          </div>
          <div style={{ marginBottom: 24 }}>
            <label htmlFor="email" style={{ display: 'block', marginBottom: 8, fontWeight: 500 }}>
              Correo electrónico <span style={{ color: '#e53935' }}>*</span>
            </label>
            <input id="email" name="email" type="email" required style={{
              width: '100%', padding: 10, borderRadius: 6, border: '1px solid #bdbdbd', fontSize: 16, background: '#181f15', color: '#fff'
            }} />
          </div>
          <div style={{ marginBottom: 24 }}>
            <label htmlFor="subject" style={{ display: 'block', marginBottom: 8, fontWeight: 500 }}>
              Asunto <span style={{ color: '#e53935' }}>*</span>
            </label>
            <input id="subject" name="subject" type="text" required style={{
              width: '100%', padding: 10, borderRadius: 6, border: '1px solid #bdbdbd', fontSize: 16, background: '#181f15', color: '#fff'
            }} />
          </div>
          <div style={{ marginBottom: 32 }}>
            <label htmlFor="message" style={{ display: 'block', marginBottom: 8, fontWeight: 500 }}>
              Mensaje <span style={{ color: '#e53935' }}>*</span>
            </label>
            <textarea id="message" name="message" required rows={6} style={{
              width: '100%', padding: 10, borderRadius: 6, border: '1px solid #bdbdbd', fontSize: 16, background: '#181f15', color: '#fff', resize: 'vertical'
            }} />
          </div>
          <button type="submit" style={{
            background: '#e6c24d',
            color: '#181f15',
            fontWeight: 700,
            border: 'none',
            borderRadius: 6,
            padding: '12px 32px',
            fontSize: 18,
            cursor: 'pointer',
            transition: 'background 0.2s'
          }}>
            Enviar
          </button>
        </form>
      </section>
    </main>
    <Footer />
  </div>
);

export default Contacto;
