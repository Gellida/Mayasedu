import React from 'react';
import Navbar from '../components/Navbar';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

const Tecnologias = () => (
  <div className={styles.landingBg} style={{minHeight: '100vh'}}>
    <Navbar />
    <main style={{maxWidth: 1100, margin: '0 auto', padding: '48px 16px 0 16px'}}>
      <h1 style={{textAlign: 'center', fontWeight: 800, fontSize: '2.7rem', margin: '0 0 36px 0', color: '#fff'}}>
Tecnologías abiertas y apropiacionismo tecnológico  por parte de las comunidades y de los integrantes de los colegios -profesores, madres y padres  y los alumnos/as-.

      </h1>
      <section style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 36}}>
        <div style={{maxWidth: 800, margin: '0 auto', color: '#232323', background: '#fff', borderRadius: 12, padding: '32px 36px', boxShadow: '0 2px 16px #0001', fontSize: '1.15rem', lineHeight: 1.7}}>
        La propuesta del manejo de tecnologías básicas y al alcance de las comunidades, de los profesores y los niños, pretende ser un elemento central para el desarrollo tecnológico de las comunidades en el siglo XXI, para ello se hace necesario que estas comunidades y los profesores en pro de los estudiantes para los cuales va dirigido el proyecto, tengan una participación central en la construcción de estas herramientas tecnológicas, lo que es posible a partir de la participación de estos actores sociales, para establecer una praxis completa en donde los alumnos/as puedan tener contacto directo con algunas herramientas físicas digitales, permitiendo con ello recortar en parte la brecha digital que las comunidades indígenas experimentan.

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

export default Tecnologias;
