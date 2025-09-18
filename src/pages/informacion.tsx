
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styles from '../styles/Home.module.css';


const gridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
  gap: '32px',
  maxWidth: 1100,
  margin: '0 auto',
  padding: '16px 0',
};

const cardStyle = {
  background: '#232323',
  borderRadius: 16,
  boxShadow: '0 2px 16px rgba(0,0,0,0.13)',
  color: '#fffbe7',
  fontFamily: 'Montserrat, Arial, sans-serif',
  padding: '32px 28px',
  display: 'flex',
  flexDirection: 'column' as const,
  minHeight: 320,
  border: '1px solid #b6d44b33',
};


const Informacion = () => (
  <div className={styles.landingBg} style={{ minHeight: '100vh', minWidth: 0 }}>
    <Navbar />
    <main style={{ padding: '80px 0 40px 0', minHeight: '80vh' }}>
      <section style={{ maxWidth: 1150, margin: '0 auto', background: 'transparent' }}>
        <h1 style={{ color: '#e6c24d', fontSize: '2.2rem', textAlign: 'center', marginBottom: 10, fontFamily: 'Montserrat, Arial, sans-serif', letterSpacing: 1 }}>Información General del Proyecto</h1>
        <p style={{ color: '#fffbe7', fontSize: '1.18rem', textAlign: 'center', margin: '0 auto 24px auto', maxWidth: 700 }}>
          Este proyecto busca transformar la educación desde una perspectiva decolonial, integrando lenguas, culturas y tecnologías abiertas para el aprendizaje y la creatividad de niñas, niños y docentes mayas.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 24, marginBottom: 36 }}>
          <a href="/noticias" style={{ background: '#e6c24d', color: '#232323', borderRadius: 8, padding: '10px 24px', fontWeight: 600, textDecoration: 'none', fontSize: '1.08rem', boxShadow: '0 2px 8px rgba(0,0,0,0.10)' }}>📰 Noticias</a>
          <a href="/cronograma" style={{ background: '#e6c24d', color: '#232323', borderRadius: 8, padding: '10px 24px', fontWeight: 600, textDecoration: 'none', fontSize: '1.08rem', boxShadow: '0 2px 8px rgba(0,0,0,0.10)' }}>📅 Cronograma</a>
        </div>
        <div style={gridStyle}>
          <div style={cardStyle}>
            <h2 style={{ color: '#e6c24d', fontSize: '1.35rem', marginBottom: 10 }}>🎯 Objetivos del Proyecto</h2>
            <ul style={{ color: '#fffbe7', fontSize: '1.07rem', paddingLeft: 20, marginBottom: 0, lineHeight: 1.7 }}>
              <li>Desarrollar metodologías pedagógicas decoloniales situadas asociadas a las decolonialidades data digitales que respeten y potencien desde la lingüística las lenguas y culturas mayas, tanto en niños como profesores, y que posibiliten por parte de los niños el adecuado aprendizaje del español.</li>
              <li>Fomentar un diálogo intercultural y comunitario en la enseñanza de niñas y niños de primero a sexto grado.</li>
              <li>Integrar perspectivas decoloniales, filosóficas, artísticas, ecofeministas y tecnológicas libres y abiertas en la formación docente.</li>
              <li>Crear instrumentos pedagógicos desde tecnologías abiertas y libres (diccionarios, traductores) que apoyen la comunicación intercultural.</li>
              <li>Promover la participación activa del profesorado en la creación y aplicación de actividades en aula desde una mirada decolonial.</li>
              <li>Generar retroalimentación entre alumnos y profesores, quebrando la lógica tradicional de que sólo los profesores enseñan.</li>
              <li>Derribar la conformación clásica de sesiones, fomentando el juego y procesos artísticos, y dinámicas comunitarias de peers a peers y pensamiento lateral.</li>
              <li>Generar rutas creativas registrables en archivos lúdicos que revelen los procesos creativos y en evolución de los niños.</li>
              <li>Fomentar el liderazgo y empoderamiento de niñas y niños.</li>
              <li>Evaluar la efectividad de las metodologías y herramientas tecnológicas, y extenderlas progresivamente a 98 centros educativos.</li>
            </ul>
          </div>
          <div style={cardStyle}>
            <h2 style={{ color: '#e6c24d', fontSize: '1.35rem', marginBottom: 10 }}>🛠️ Metodología de Trabajo</h2>
            <ul style={{ color: '#fffbe7', fontSize: '1.07rem', paddingLeft: 20, marginBottom: 0, lineHeight: 1.7 }}>
              <li>Sesiones de clase, charlas, talleres prácticos y aplicación en escuelas piloto.</li>
              <li>Introducción a fundamentos teóricos: lingüística, filosofía de la liberación, decolonialidad, artes críticas y lúdicas.</li>
              <li>Formación en herramientas lingüísticas para niños y profesores (maya y español).</li>
              <li>Formación en herramientas digitales: diccionarios y traductores creados para el proyecto.</li>
              <li>Dinámicas pedagógicas relacionales basadas en procesos artísticos y pensamiento lateral.</li>
              <li>Dinámicas comunitarias de peers a peers.</li>
              <li>Generación de rutas creativas registrables en archivos lúdicos.</li>
              <li>Reflexión comunitaria con docentes y directores.</li>
              <li>Sesiones de retroalimentación basadas en grabaciones y observaciones de clases.</li>
            </ul>
          </div>
          <div style={cardStyle}>
            <h2 style={{ color: '#e6c24d', fontSize: '1.35rem', marginBottom: 10 }}>🌱 Resultados Esperados</h2>
            <ul style={{ color: '#fffbe7', fontSize: '1.07rem', paddingLeft: 20, marginBottom: 0, lineHeight: 1.7 }}>
              <li>Elaboración de actividades didácticas aplicando los conocimientos adquiridos en cada sesión.</li>
              <li>Presentación de actividades en sesiones colectivas con apoyo audiovisual.</li>
              <li>Retroalimentación de investigadores y colegas para mejorar instrumentos educativos.</li>
              <li>Intercambio de experiencias y mejora continua en las escuelas piloto.</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default Informacion;
