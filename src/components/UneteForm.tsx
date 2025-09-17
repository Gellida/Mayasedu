import React from "react";

export default function UneteForm() {
  return (
    <form
      action="https://formspree.io/f/xnnbrzak"
      method="POST"
      aria-label="Formulario de colaboración"
      style={{
        maxWidth: 500,
        width: '100%',
        background: '#232323',
        borderRadius: 12,
        padding: '60px 100px',
        boxShadow: '0 2px 16px rgba(0,0,0,0.13)',
        color: '#fffbe7',
        fontFamily: 'Montserrat, Arial, sans-serif',
        margin: '40px auto 0 auto'
      }}
    >
      <h2 style={{ textAlign: 'center', fontWeight: 700, fontSize: '1.5rem', marginBottom: 24, color: '#e6c24d' }}>
        ¿Quieres unirte como colaborador?
      </h2>
      <div style={{ marginBottom: 24 }}>
        <label htmlFor="nombre" style={{ display: 'block', marginBottom: 8, fontWeight: 500 }}>
          Nombre(s)
        </label>
        <input id="nombre" name="nombre" required style={{
          width: '100%', padding: 10, borderRadius: 6, border: '1px solid #bdbdbd', fontSize: 16, background: '#181f15', color: '#fff'
        }} />
      </div>
      <div style={{ marginBottom: 24 }}>
        <label htmlFor="apellidos" style={{ display: 'block', marginBottom: 8, fontWeight: 500 }}>
          Apellidos
        </label>
        <input id="apellidos" name="apellidos" required style={{
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
        <label htmlFor="academico" style={{ display: 'block', marginBottom: 8, fontWeight: 500 }}>
          Perfil académico o profesional
        </label>
        <input id="academico" name="academico" required style={{
          width: '100%', padding: 10, borderRadius: 6, border: '1px solid #bdbdbd', fontSize: 16, background: '#181f15', color: '#fff'
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
        Unirme
      </button>
    </form>
  );
}
