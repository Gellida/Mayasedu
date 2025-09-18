import React from 'react';
import Navbar from '../components/Navbar';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

const Metodologias = () => (
  <div className={styles.landingBg} style={{minHeight: '100vh'}}>
    <Navbar />
    <main style={{maxWidth: 1100, margin: '0 auto', padding: '120px 16px 0 16px'}}>
      <h1 style={{textAlign: 'center', fontWeight: 800, fontSize: '2.7rem', margin: '0 0 36px 0', color: '#C19A32'}}>        Metodologías para la educación


      </h1>
      <section style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 36}}>
        <div style={{maxWidth: 800, margin: '0 auto', color: '#232323', background: '#fff', borderRadius: 12, padding: '32px 36px', boxShadow: '0 2px 16px #0001', fontSize: '1.15rem', lineHeight: 1.7}}>
       Este proyecto busca resarcir la herida colonial provocada por los procesos colonizadores que han eliminado la rica historia del pueblo maya, para ello se realizarán las siguientes operaciones:
 Generar videos y material informativo en español y en las lenguas mayas para que las abuelas/ose de las comunidades mayas de Chiapas, se informen e informen sobre sus tradiciones, y ellas/os puedan contar historias de su cultura a los niños/as.
Recabar material existente, o hacer material, sobre las historias locales –entregadas por los propios componentes de las comunidades mayas de Chiapas- para alimentar a las bibliotecas de los colegios, o empezar con ellos a crear bibliotecas accesibles a los profesores, los niños/as, los padres y la comunidad, las cuales pueden ser virtuales y se pueden viralizar mediante apps que puedan descargar en sus móviles..
Recuperar las de tradiciones de corte prehispánicas que se han conectado con celebraciones religiosas (principalmente católicas) y que han generado una nueva simbiosis cultural, como se aprecia en la actualidad.

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

export default Metodologias;
