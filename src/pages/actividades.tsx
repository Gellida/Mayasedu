import React from 'react';
import Navbar from '../components/Navbar';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

const Actividades = () => (
  <div className={styles.landingBg} style={{minHeight: '100vh'}}>
    <Navbar />
    <main style={{maxWidth: 1100, margin: '0 auto', padding: '120px 16px 0 16px'}}>
      <h1 style={{textAlign: 'center', fontWeight: 800, fontSize: '2.7rem', margin: '0 0 36px 0', color: '#C19A32'}}>         Desarrollo de actividades educativas 

      </h1>
      <section style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 36}}>
        <div style={{maxWidth: 800, margin: '0 auto', color: '#232323', background: '#fff', borderRadius: 12, padding: '32px 36px', boxShadow: '0 2px 16px #0001', fontSize: '1.15rem', lineHeight: 1.7}}>
       Las actividades nacen de propuestas elaboradas por el personal docente que se encuentra en los diversos centros educativos pilotos en conjunción con los investigadores que otorgan una serie de herramientas educativas para que se elaboren las actividades, entre ellas conceptos provenientes de distintas disciplinas como las artes y los estudios decoloniales o el procomún.
Cabe señalar, que las actividades educativas poseen un corte pedagógico y filosófico que responde a las necesidades y problemáticas que se encuentran presentes en los distintos contextos educativos y sociales indígenas de Chiapas. 
Y si bien, las actividades responden al marco educativo oficial mexicano, y por tanto, cumple con los planes de estudios oficiales, pero agrega múltiples contenidos y perspectivas nuevas de enfoque, así las actividades creadas por el personal docente son y serán construidas como se ha dicho a partir de la realidad de las comunidades mayas, y hacen participe a los alumnos/as, madres y padres de familia y a la comunidad local.


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

export default Actividades;
