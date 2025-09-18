import React from 'react';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styles from '../styles/Home.module.css';

const cardStyle = {
  background: '#232323',
  borderRadius: 16,
  boxShadow: '0 2px 16px rgba(0,0,0,0.13)',
  color: '#fffbe7',
  fontFamily: 'Montserrat, Arial, sans-serif',
  maxWidth: 700,
  margin: '0 auto 32px auto',
  padding: '36px 32px',
  textAlign: 'left' as const,
  border: '1px solid #b6d44b33',
  position: 'relative' as const,
};

const Formacion = () => (
  <div className={styles.landingBg} style={{ minHeight: '100vh', minWidth: 0 }}>
    <Navbar />
    <main style={{ padding: '80px 0 40px 0', minHeight: '80vh' }}>
      <section style={cardStyle}>
        <h1 style={{ fontWeight: 700, fontSize: '2.2rem', color: '#C19A32', marginBottom: 10, textAlign: 'center', letterSpacing: 1 }}>Formación</h1>
        <h2 style={{ fontSize: '1.3rem', color: '#e6c24d', marginBottom: 18, textAlign: 'center' }}>Nuevas metodologías pedagógicas y lingüísticas, tecnologías abiertas y procesos artísticos</h2>
        <p style={{ fontSize: '1.13rem', color: '#fffbe7', marginBottom: 18, textAlign: 'center' }}>
          Un curso innovador para docentes, promotores y estudiantes de ascendencia maya, que integra tecnología, arte y cultura en la educación.
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 32, justifyContent: 'center', marginBottom: 24 }}>
          <div style={{ minWidth: 220, flex: 1 }}>
            <h3 style={{ color: '#e6c24d', fontSize: '1.08rem', marginBottom: 6 }}>Modalidad, Fechas y Sesiones</h3>
            <ul style={{ color: '#bdbdbd', fontSize: '1.05rem', marginBottom: 12, paddingLeft: 20 }}>
              <li><b>Número total de sesiones:</b> 55 (marzo 2025 – julio 2026)</li>
              <li><b>Duración por sesión:</b> 1 hora aprox.</li>
              <li><b>Modalidad:</b> en línea, presencial o semipresencial</li>
              <li><b>Fechas y horarios:</b> según cronograma, inicio general a las 9:00 (hora México)</li>
            </ul>
            <h3 style={{ color: '#e6c24d', fontSize: '1.08rem', marginBottom: 6 }}>Público objetivo</h3>
            <ul style={{ color: '#bdbdbd', fontSize: '1.05rem', marginBottom: 12, paddingLeft: 20 }}>
              <li>Docentes y promotores</li>
              <li>Estudiantes de ascendencia maya</li>
              <li>Personas interesadas en educación intercultural y bilingüe</li>
            </ul>
          </div>
          <div style={{ minWidth: 220, flex: 1 }}>
            <h3 style={{ color: '#e6c24d', fontSize: '1.08rem', marginBottom: 6 }}>Objetivos</h3>
            <ul style={{ color: '#bdbdbd', fontSize: '1.05rem', marginBottom: 12, paddingLeft: 20 }}>
              <li>Innovar en la enseñanza de lenguas mayas y cultura.</li>
              <li>Integrar tecnologías abiertas y recursos digitales.</li>
              <li>Fomentar la creatividad a través del arte y la cultura.</li>
            </ul>
            <h3 style={{ color: '#e6c24d', fontSize: '1.08rem', marginBottom: 6 }}>Recursos y materiales</h3>
            <ul style={{ color: '#bdbdbd', fontSize: '1.05rem', marginBottom: 12, paddingLeft: 20 }}>
              <li>Manual descargable</li>
              <li>Videos y tutoriales</li>
              <li>Acceso a plataformas y herramientas digitales</li>
              <li>Materiales artísticos y culturales</li>
            </ul>
          </div>
        </div>
        <div style={{ margin: '24px 0' }}>
          <h3 style={{ color: '#e6c24d', fontSize: '1.13rem', marginBottom: 8 }}>Módulos del curso</h3>
          <ol style={{ color: '#bdbdbd', fontSize: '1.05rem', marginBottom: 0, paddingLeft: 24 }}>
            <li>Metodologías pedagógicas y lingüísticas para la educación maya</li>
            <li>Tecnologías abiertas y recursos digitales</li>
            <li>Procesos artísticos y creativos en la educación</li>
            <li>Diseño de materiales y actividades didácticas</li>
            <li>Evaluación y sistematización de experiencias</li>
          </ol>
        </div>
        <div style={{ textAlign: 'center', margin: '18px 0 0 0' }}>
          <a href="/Curso.pdf" target="_blank" rel="noopener noreferrer" style={{ color: '#e6c24d', textDecoration: 'underline', fontWeight: 500, fontSize: '1.08rem' }}>
            Descargar programa completo (PDF)
          </a>
        </div>
      </section>
  <section style={{ ...cardStyle, margin: '0 auto 0 auto', background: '#181f15', border: '1px solid #e6c24d55', position: 'relative' as const }}>
        <h2 style={{ fontSize: '1.15rem', color: '#e6c24d', marginBottom: 8, textAlign: 'center' }}>¿Te interesa participar?</h2>
        <p style={{ color: '#fffbe7', fontSize: '1.05rem', textAlign: 'center' }}>
          Próximamente abriremos inscripciones para nuevas ediciones del curso.<br />
          Si deseas recibir información, <Link href="/unete" style={{ color: '#b6d44b', textDecoration: 'underline' }}>regístrate aquí</Link> o escríbenos a <a href="mailto:chiapas.proyectomexico24@gmail.com" style={{ color: '#b6d44b', textDecoration: 'underline' }}>chiapas.proyectomexico24@gmail.com</a>.
        </p>
      </section>
    </main>
    <Footer />
  </div>
);

export default Formacion;
