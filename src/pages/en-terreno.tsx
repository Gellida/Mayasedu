
import Navbar from '../components/Navbar';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

const EnTerreno = () => (
  <div className={styles.landingBg} style={{minHeight: '100vh'}}>
    <Navbar />
    <main style={{maxWidth: 1100, margin: '0 auto', padding: '48px 16px 0 16px'}}>
      <h1 style={{textAlign: 'center', fontWeight: 800, fontSize: '2.7rem', margin: '0 0 36px 0', color: '#fff'}}>
        En terreno
      </h1>
      <section style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 36}}>
        <div style={{maxWidth: 800, margin: '0 auto', color: '#232323', background: '#fff', borderRadius: 12, padding: '32px 36px', boxShadow: '0 2px 16px #0001', fontSize: '1.15rem', lineHeight: 1.7}}>
          El proyecto se sustenta en una investigación de campo, que aborda a través de la observación, análisis,  toma de decisiones y puesta en acción de reformas educativas que se centra en las problemáticas sobre la forma y modo de afrontar la educación de los colegios primarios existente en las comunidades mayas de Chiapas de la zona Zapatista, y otros, teniendo como centro resolver la carencia de comprensión lingüista entre profesores que hablan español y alumnos que hablan sólo lenguas mayas. Además de ello, se pretende que con el desarrollo de nuevas metodologías que en primera instancia serán aplicadas a los grupos de alumnos de los colegios pilotos, se mejore los procesos de aprendizaje y comprensión de conceptos básicos y estructurales de las diversas áreas de conocimiento, prioritariamente el lenguaje.
Las tomas de notas, fotografías,  grabaciones  de video y audio, Ilustraciones y dibujos, encuestas y muestreos nos permitirán establecer una visión mas completa de la forma de trabajo que se desarrolla en las comunidades de Simojovel, el Salto de Agua y Palenque, en Chiapas – México (comprendiendo gran parte de la zona Zapatista), además de establecer una serie de elementos para investigaciones futuras.
          {/* Esto es un comentario en JSX/React
          <div style={{marginTop: 18}}>
            <a href="#" style={{fontWeight: 700, color: '#232323', textDecoration: 'underline'}}>leer más</a>
          </div> */}
          
          
        </div>
      
        <div style={{marginTop: 24, width: '100%', maxWidth: 420}}>
          <a href="#" style={{fontWeight: 700, color: '#232323', textDecoration: 'underline'}}>ver más</a>
        </div>
      </section>
    </main>
  </div>
);

export default EnTerreno;
