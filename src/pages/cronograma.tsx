import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styles from '../styles/Home.module.css';

const tableStyle = {
  width: '100%',
  maxWidth: 1000,
  margin: '0 auto',
  background: '#232323',
  borderRadius: 12,
  color: '#fffbe7',
  fontFamily: 'Montserrat, Arial, sans-serif',
  fontSize: '1.05rem',
  boxShadow: '0 2px 16px rgba(0,0,0,0.13)',
  borderCollapse: 'collapse' as const,
  overflow: 'hidden',
};

const thStyle = {
  background: '#C19A32',
  color: '#232323',
  fontWeight: 700,
  padding: '10px 8px',
  textAlign: 'left' as const,
  fontSize: '1.08rem',
};

const tdStyle = {
  padding: '10px 8px',
  borderBottom: '1px solid #b6d44b33',
  verticalAlign: 'top' as const,
};

const rows = [
  { fecha: '20/09/25', ponentes: 'Yto Aranda', tema: 'Grabación y fotografía de actividades escolares con celular (mirada artística)', dirigido: 'Investigadores', obs: '' },
  { fecha: '20/09/25', ponentes: 'L. Avendaño / L.A. Roque', tema: 'Lineamientos generales, diccionario y traductor, metodologías y programa de arte', dirigido: 'Profesorado', obs: '' },
  { fecha: '27/09/25', ponentes: 'Profesorado Escuelas piloto', tema: 'Aplicación de grabación y fotografía en clases, videos y comentarios', dirigido: 'Investigadores y profesorado', obs: '' },
  { fecha: '04/10/25', ponentes: 'L.A. Roque / L. Avendaño', tema: 'Parámetros generales del proyecto y actividades vinculadas al plan de estudios', dirigido: 'Investigadores y profesorado', obs: '' },
  { fecha: '11/10/25', ponentes: 'Olivia Sierra', tema: 'Comunidad desde la filosofía de la liberación', dirigido: 'Investigadores / Profesorado', obs: 'Conferencia y aplicación' },
  { fecha: '18/10/25', ponentes: 'Escuelas piloto', tema: 'Aplicación de conceptos de filosofía de la liberación en clases', dirigido: 'Investigadores y profesorado', obs: 'Videos y comentarios' },
  { fecha: '25/10/25', ponentes: 'E. Téllez / O. Sierra', tema: 'Eurocentrismo: conceptos y aplicación en aulas', dirigido: 'Investigadores / Profesorado', obs: 'Conferencia y práctica' },
  { fecha: '01/11/25', ponentes: 'Escuelas piloto', tema: 'Aplicación en clases de conceptos sobre Eurocentrismo', dirigido: 'Investigadores y profesorado', obs: 'Videos y comentarios' },
  { fecha: '08/11/25', ponentes: 'Christopher Ventura', tema: '¿Cómo enseñar sobre Latinoamérica?', dirigido: 'Investigadores / Profesorado', obs: 'Conferencia y aplicación' },
  { fecha: '15/11/25', ponentes: 'Escuelas piloto', tema: 'Aplicación de conceptos de \'¿Cómo enseñar sobre Latinoamérica?\' en clases', dirigido: 'Investigadores y profesorado', obs: 'Videos y comentarios' },
  { fecha: '22/11/25', ponentes: 'Juan Carlos Gímenos', tema: 'Implicaciones de la decolonialidad', dirigido: 'Investigadores / Profesorado', obs: 'Conferencia y aplicación' },
  { fecha: '29/11/25', ponentes: 'Escuelas piloto', tema: 'Aplicación en clases de Implicaciones de la decolonialidad', dirigido: 'Investigadores y profesorado', obs: 'Videos y comentarios' },
  { fecha: '29/11/25', ponentes: 'Karina Bidaseca', tema: 'El Abya Yala o nuestra América', dirigido: 'Investigadores / Profesorado', obs: 'Conferencia y aplicación' },
  { fecha: '06/12/25', ponentes: 'Escuelas piloto', tema: 'Aplicación en clases de El Abya Yala o nuestra América', dirigido: 'Investigadores y profesorado', obs: 'Videos y comentarios' },
  { fecha: '01-08/12/25', ponentes: 'Antonio Lafuente', tema: 'Cómo prototipar', dirigido: 'Investigadores / Profesorado', obs: 'Conferencia y aplicación' },
  { fecha: '12/12/25', ponentes: 'Escuelas piloto', tema: 'Aplicación de conceptos de \'Cómo prototipar\' en clases', dirigido: 'Profesorado', obs: 'Videos y comentarios' },
  { fecha: '20/12/25', ponentes: 'Walter Mignolo', tema: 'Decolonialidad y Lingüística', dirigido: 'Investigadores / Profesorado', obs: 'Conferencia y aplicación' },
  { fecha: '27/12/25', ponentes: 'Escuelas piloto', tema: 'Aplicación de Decolonialidad y Lingüística en clases', dirigido: 'Investigadores y profesorado', obs: 'Videos y comentarios' },
  { fecha: '03/01/26', ponentes: 'Walter Mignolo', tema: 'Importancia del bilingüismo y la mantención de las lenguas locales', dirigido: 'Investigadores / Profesorado', obs: 'Conferencia y aplicación' },
  { fecha: '10/01/26', ponentes: 'Escuelas piloto', tema: 'Aplicación de bilingüismo y lenguas locales en clases', dirigido: 'Investigadores y profesorado', obs: 'Videos y comentarios' },
  { fecha: '17/01/26', ponentes: 'Theophile Ambadiang', tema: 'La Enseñanza de una segunda lengua', dirigido: 'Investigadores / Profesorado', obs: 'Conferencia y aplicación' },
  { fecha: '24/01/26', ponentes: 'Escuelas piloto', tema: 'Aplicación de enseñanza de segunda lengua en clases', dirigido: 'Investigadores y profesorado', obs: 'Videos y comentarios' },
  { fecha: '31/01/26', ponentes: 'L.A. Roque Vázquez', tema: 'Metodologías para lectura y escritura desde la realidad local', dirigido: 'Investigadores / Profesorado', obs: 'Conferencia y aplicación' },
  { fecha: '07/02/26', ponentes: 'Escuelas piloto', tema: 'Aplicación de metodologías de lectura/escritura en clases', dirigido: 'Investigadores y profesorado', obs: 'Videos y comentarios' },
  { fecha: '14/02/26', ponentes: 'Profesorado responsable', tema: 'Trabajo de configuración de diccionarios y traductores', dirigido: 'Investigadores / Profesorado', obs: 'Aplicación en aula' },
  { fecha: '21/02/26', ponentes: 'Profesorado responsable', tema: 'Aplicación del trabajo con diccionarios y traductores en clases', dirigido: 'Profesorado', obs: 'Videos y comentarios' },
  { fecha: '28/02/26', ponentes: 'Theophile Ambadiang', tema: 'Diccionarios y traductores para niños/as, profesores y comunidades', dirigido: 'Investigadores', obs: '' },
  { fecha: '07/03/26', ponentes: 'Theophile Ambadiang', tema: 'Diccionarios y traductores: aplicación a los alumnos', dirigido: 'Profesorado', obs: '' },
  { fecha: '14/03/26', ponentes: 'Profesorado', tema: 'Aplicación de diccionarios y traductores en clases', dirigido: 'Investigadores y profesorado', obs: 'Videos y comentarios' },
  { fecha: '21/03/26', ponentes: 'J. Gellida / E. Matos', tema: 'Configuración digital de diccionarios y traductores', dirigido: 'Investigadores / Profesorado', obs: 'Conferencia y aplicación' },
  { fecha: '28/03/26', ponentes: 'Profesorado', tema: 'Aplicación de configuración digital en clases', dirigido: 'Investigadores y profesorado', obs: 'Videos y comentarios' },
  { fecha: '04/04/26', ponentes: 'Valeria Balmaceda', tema: 'Desarrollando sentidos y percepciones en los/as niños/as', dirigido: 'Investigadores / Profesorado', obs: 'Conferencia y aplicación' },
  { fecha: '11/04/26', ponentes: 'Escuelas piloto', tema: 'Aplicación en clases de sentidos y percepciones', dirigido: 'Investigadores y profesorado', obs: 'Videos y comentarios' },
  { fecha: '18/04/26', ponentes: 'Mario Soro', tema: 'Artes visuales como instrumento educativo', dirigido: 'Investigadores / Profesorado', obs: 'Conferencia y aplicación' },
  { fecha: '25/04/26', ponentes: 'Escuelas piloto', tema: 'Aplicación de artes visuales en clases', dirigido: 'Investigadores y profesorado', obs: 'Videos y comentarios' },
  { fecha: '02/05/26', ponentes: 'Alfredo Vicent', tema: 'Cuerpo humano como espacio musical y comunicativo', dirigido: 'Investigadores / Profesorado', obs: 'Conferencia y aplicación' },
  { fecha: '09/05/26', ponentes: 'Escuelas piloto', tema: 'Aplicación en clases de cuerpo humano musical/comunicativo', dirigido: 'Investigadores y profesorado', obs: 'Videos y comentarios' },
  { fecha: '16/05/26', ponentes: 'Antonio Villagrán', tema: 'Música como instrumento educativo de colaboración y creatividad', dirigido: 'Investigadores / Profesorado', obs: 'Conferencia y aplicación' },
  { fecha: '23/05/26', ponentes: 'Escuelas piloto', tema: 'Aplicación en clases de música colaborativa', dirigido: 'Investigadores y profesorado', obs: 'Videos y comentarios' },
  { fecha: '30/05/26', ponentes: 'Walter Lippold', tema: 'Colonialismo digital: implicaciones y enseñanza', dirigido: 'Investigadores / Profesorado', obs: 'Conferencia y aplicación' },
  { fecha: '06/06/26', ponentes: 'Escuelas piloto', tema: 'Aplicación en clases de colonialismo digital', dirigido: 'Investigadores y profesorado', obs: 'Videos y comentarios' },
  { fecha: '06/06/26', ponentes: 'Lynda Avendaño', tema: 'Decolonialidad digital: cómo aplicarla en educación', dirigido: 'Investigadores / Profesorado', obs: 'Conferencia y aplicación' },
  { fecha: '13/06/26', ponentes: 'Escuelas piloto', tema: 'Aplicación de decolonialidad digital en clases', dirigido: 'Investigadores y profesorado', obs: 'Videos y comentarios' },
  { fecha: '13/06/26', ponentes: 'J. Gellida / E. Matos', tema: 'Manejo del diccionario y traductor digital en clases', dirigido: 'Investigadores / Profesorado', obs: 'Conferencia y aplicación' },
  { fecha: '20/06/26', ponentes: 'Escuelas piloto', tema: 'Aplicación de manejo de diccionario/traductor digital', dirigido: 'Investigadores y profesorado', obs: 'Videos y comentarios' },
  { fecha: '20/06/26', ponentes: 'Ricardo Vega', tema: 'Tecnologías abiertas y apropiacionismo tecnológico', dirigido: 'Investigadores / Profesorado', obs: 'Conferencia y aplicación' },
  { fecha: '27/06/26', ponentes: 'Escuelas piloto', tema: 'Aplicación de tecnologías abiertas en clases', dirigido: 'Investigadores y profesorado', obs: 'Videos y comentarios' },
  { fecha: '27/06/26', ponentes: 'Lynda Avendaño', tema: 'Mujeres y ecofeminismo', dirigido: 'Investigadores / Profesorado', obs: 'Conferencia y aplicación' },
  { fecha: '04/07/26', ponentes: 'Escuelas piloto', tema: 'Aplicación de ecofeminismo en clases', dirigido: 'Investigadores y profesorado', obs: 'Videos y comentarios' },
  { fecha: '04/07/26', ponentes: 'Paola Villegas', tema: 'Maneras de enseñar ciencias en colegios interculturales', dirigido: 'Investigadores / Profesorado', obs: 'Conferencia y aplicación' },
  { fecha: '11/07/26', ponentes: 'Escuelas piloto', tema: 'Aplicación Maneras de enseñar ciencias en colegios interculturales', dirigido: 'Investigadores y profesorado', obs: 'Videos y comentarios' },
  { fecha: '11/07/26', ponentes: 'Viviana López Ramírez', tema: 'Fórmulas para enseñar matemáticas en colegios interculturales', dirigido: 'Investigadores / Profesorado', obs: 'Conferencia y aplicación' },
  { fecha: '18/07/26', ponentes: 'Escuelas piloto', tema: 'Aplicación de Fórmulas para enseñar matemáticas en colegios interculturales', dirigido: 'Investigadores y profesorado', obs: 'Videos y comentarios' },
  { fecha: '18/07/26', ponentes: 'L. Avendaño / L. Roque', tema: 'Conversatorio con profesores sobre actividades realizadas', dirigido: 'Investigadores y profesorado', obs: '' },
  { fecha: '18/07/26', ponentes: 'L. Avendaño / L. Roque / Jefes zonales', tema: 'Cierre y resultados del curso', dirigido: 'Investigadores y profesorado', obs: '' },
];

const Cronograma = () => (
  <div className={styles.landingBg} style={{ minHeight: '100vh', minWidth: 0 }}>
    <Navbar />
    <main style={{ padding: '80px 0 40px 0', minHeight: '80vh' }}>
      <section style={{ maxWidth: 1100, margin: '0 auto', background: 'transparent' }}>
        <h1 style={{ fontWeight: 700, fontSize: '2.2rem', color: '#C19A32', marginBottom: 10, textAlign: 'center', letterSpacing: 1 }}>Cronograma completo</h1>
        <p style={{ fontSize: '1.13rem', color: '#fffbe7', marginBottom: 24, textAlign: 'center' }}>
          Consulta todas las actividades y clases programadas para el ciclo 2025-2026.
        </p>
        <div style={{ overflowX: 'auto' }}>
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={thStyle}>Fecha</th>
                <th style={thStyle}>Ponente(s)</th>
                <th style={thStyle}>Tema / Actividad</th>
                <th style={thStyle}>Dirigido a</th>
                <th style={thStyle}>Observaciones</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, idx) => (
                <tr key={idx}>
                  <td style={tdStyle}>{row.fecha}</td>
                  <td style={tdStyle}>{row.ponentes}</td>
                  <td style={tdStyle}>{row.tema}</td>
                  <td style={tdStyle}>{row.dirigido}</td>
                  <td style={tdStyle}>{row.obs}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default Cronograma;
