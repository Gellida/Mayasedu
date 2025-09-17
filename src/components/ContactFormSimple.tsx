import React from "react";
import styles from '../styles/Contacto.module.css';

export default function ContactFormSimple() {
  return (
    <form
      action="https://formspree.io/f/xandkjry"
      method="POST"
      aria-label="Formulario de contacto"
      style={{
        maxWidth: 500,
        width: '100%',
        background: '#232323',
        borderRadius: 12,
        padding: '60px 100px',
        boxShadow: '0 2px 16px rgba(0,0,0,0.13)',
        color: '#fffbe7',
        fontFamily: 'Montserrat, Arial, sans-serif',
        margin: '0 auto'
      }}
    >
      <div style={{ marginBottom: 24 }}>
        <label htmlFor="name" style={{ display: 'block', marginBottom: 8, fontWeight: 500}}>
          Nombre
        </label>
        <input id="name" name="name" required style={{
          width: '100%', padding: 10, borderRadius: 6, border: '1px solid #bdbdbd', fontSize: 16, background: '#181f15', color: '#fff'
        }} />
      </div>
      <div style={{ marginBottom: 24 }}>
        <label htmlFor="email" style={{ display: 'block', marginBottom: 8, fontWeight: 500 }}>
          Email
        </label>
        <input id="email" name="email" type="email" required style={{
          width: '100%', padding: 10, borderRadius: 6, border: '1px solid #bdbdbd', fontSize: 16, background: '#181f15', color: '#fff'
        }} />
      </div>
      <div style={{ marginBottom: 32 }}>
        <label htmlFor="message" style={{ display: 'block', marginBottom: 8, fontWeight: 500 }}>
          Mensaje
        </label>
        <textarea id="message" name="message" rows={6} required style={{
          width: '100%', padding: 10, borderRadius: 6, border: '1px solid #bdbdbd', fontSize: 16, background: '#181f15', color: '#fff', resize: 'vertical'
        }} />
      </div>
      <input type="hidden" name="_next" value="/gracias" />
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
  );
}
