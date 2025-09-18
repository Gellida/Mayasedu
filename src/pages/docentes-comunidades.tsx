import React from 'react';
import Navbar from '../components/Navbar';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

const DocentesComunidades = () => (
  <div className={styles.landingBg} style={{minHeight: '100vh'}}>
    <Navbar />
    <main style={{maxWidth: 1100, margin: '0 auto', padding: '120px 16px 0 16px'}}>
      <h1 style={{textAlign: 'center', fontWeight: 800, fontSize: '2.7rem', margin: '0 0 36px 0', color: '#C19A32'}}>Los profesores hablan, dialogan, crean y construyen educación  junto a las comunidades

      </h1>
      <section style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 36}}>
        <div style={{maxWidth: 800, margin: '0 auto', color: '#232323', background: '#fff', borderRadius: 12, padding: '32px 36px', boxShadow: '0 2px 16px #0001', fontSize: '1.15rem', lineHeight: 1.7}}>
Este proyecto surge a petición de los profesores del Estado de Chiapas de las zonas campesinas mayas con el fin de ayudarlos a poder traspasar la barrera lingüística entre docentes y alumnos/as, dado que estos/as hablan lenguas mayas y los profesores hablan español, además de que los alumnos que hablan español o lo escriben en esta lengua presentan una severa dificultad de comprensión de textos, así como de la decodificación de códigos lingüísticos relacionados con el español, al tiempo que no escriben en sus lenguas maternas;  es por ello que es difícil que los niños/as aprendan.
Por esto, los profesores junto a los investigadores del proyecto, la comunidad y los padres se están organizando, dialogando y construyendo alternativas para superar las problemáticas enunciadas, al tiempo de buscar alternativas para que los alumnos/as aprendan de forma diferente a la convencional a leer, escribir, matemáticas, ciencias, artes, etc.

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

export default DocentesComunidades;
