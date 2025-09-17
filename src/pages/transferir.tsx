
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styles from '../styles/Home.module.css';


const Transferir = () => {
  const [form, setForm] = useState({
    nombre: '',
    banco: '',
    clabe: '',
    concepto: '',
    cantidad: '',
    email: '',
  });
  const [enviado, setEnviado] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEnviado(true);
  };

  return (
    <div className={styles.landingBg} style={{ minHeight: '100vh', minWidth: 0}}>
      <Navbar />
      <main style={{ padding: '60px 24px', background: 'transparent', minHeight: '100vh' }}>
        <h1 style={{ textAlign: 'center', fontWeight: 700, fontSize: '2.5rem', margin: '32px 0 12px', color: '#fff' }}>Transferir</h1>
        <p style={{ textAlign: 'center', fontSize: '1.15rem', marginBottom: 36, color: '#bdbdbd' }}>
          Ingresa los datos de tu transferencia. No se realizará ningún cobro, solo se guardará la información para contacto y seguimiento.
        </p>
        <section style={{ display: 'flex', justifyContent: 'center' }}>
          <form onSubmit={handleSubmit} style={{
            maxWidth: 500,
            width: '100%',
            background: '#232323',
            borderRadius: 12,
            padding: '40px 100px',
            boxShadow: '0 2px 16px rgba(0,0,0,0.13)',
            color: '#fffbe7',
            fontFamily: 'Montserrat, Arial, sans-serif',
          }}>
            <div style={{ marginBottom: 24 }}>
              <label style={{ display: 'block', marginBottom: 8, fontWeight: 500 }}>
                Nombre del titular de la tarjeta:
              </label>
              <input name="nombre" value={form.nombre} onChange={handleChange} required style={{
                width: '100%', padding: 10, borderRadius: 6, border: '1px solid #bdbdbd', fontSize: 16, background: '#181f15', color: '#fff'
              }} />
            </div>
            <div style={{ marginBottom: 24 }}>
              <label style={{ display: 'block', marginBottom: 8, fontWeight: 500 }}>
                Banco:
              </label>
              <input name="banco" value={form.banco} onChange={handleChange} required style={{
                width: '100%', padding: 10, borderRadius: 6, border: '1px solid #bdbdbd', fontSize: 16, background: '#181f15', color: '#fff'
              }} />
            </div>
            <div style={{ marginBottom: 24 }}>
              <label style={{ display: 'block', marginBottom: 8, fontWeight: 500 }}>
                CLABE/IBAN:
              </label>
              <input name="clabe" value={form.clabe} onChange={handleChange} required style={{
                width: '100%', padding: 10, borderRadius: 6, border: '1px solid #bdbdbd', fontSize: 16, background: '#181f15', color: '#fff'
              }} />
            </div>
            <div style={{ marginBottom: 24 }}>
              <label style={{ display: 'block', marginBottom: 8, fontWeight: 500 }}>
                Concepto de transferencia:
              </label>
              <input name="concepto" value={form.concepto} onChange={handleChange} required style={{
                width: '100%', padding: 10, borderRadius: 6, border: '1px solid #bdbdbd', fontSize: 16, background: '#181f15', color: '#fff'
              }} />
            </div>
            <div style={{ marginBottom: 24 }}>
              <label style={{ display: 'block', marginBottom: 8, fontWeight: 500 }}>
                Cantidad a transferir:
              </label>
              <input name="cantidad" type="number" min="1" step="any" value={form.cantidad} onChange={handleChange} required style={{
                width: '100%', padding: 10, borderRadius: 6, border: '1px solid #bdbdbd', fontSize: 16, background: '#181f15', color: '#fff'
              }} />
            </div>
            <div style={{ marginBottom: 32 }}>
              <label style={{ display: 'block', marginBottom: 8, fontWeight: 500 }}>
                Tu correo electrónico:
              </label>
              <input name="email" type="email" value={form.email} onChange={handleChange} required style={{
                width: '100%', padding: 10, borderRadius: 6, border: '1px solid #bdbdbd', fontSize: 16, background: '#181f15', color: '#fff'
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
              Enviar información
            </button>
            {enviado && (
              <div style={{ marginTop: 24, color: '#b6ff00', fontWeight: 600, textAlign: 'center' }}>
                ¡Gracias! Tus datos han sido registrados para seguimiento. No se ha realizado ningún cobro.
              </div>
            )}
          </form>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Transferir;
