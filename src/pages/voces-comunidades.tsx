import React from 'react';
import Navbar from '../components/Navbar';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

const VocesComunidades = () => (
  
  <div className={styles.landingBg} style={{minHeight: '100vh'}}>
    <Navbar />
    <main style={{maxWidth: 1100, margin: '0 auto', padding: '48px 16px 0 16px'}}>
      <h1 style={{textAlign: 'center', fontWeight: 800, fontSize: '2.7rem', margin: '0 0 36px 0', color: '#fff'}}>
Las comunidades hablan, dialogan y construyen

      </h1>
      <section style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 36}}>
        <div style={{maxWidth: 800, margin: '0 auto', color: '#232323', background: '#fff', borderRadius: 12, padding: '32px 36px', boxShadow: '0 2px 16px #0001', fontSize: '1.15rem', lineHeight: 1.7}}>
Por que somos un proyecto situado, el proyecto parte y se sustenta en las comunidades mayas Zapatistas de Chiapas, y otros, que han identificado los desafíos que enfrentan estas comunidades, y para ello proponen nuevos esfuerzos, alianzas y participación para construir una mejor educación para sus niños/as desde la realidad local, sus identidades, y cultura atendiendo a los desafíos del Siglo XXI. Desde el diálogo comunitario,  el aprendizaje dialógico, este proyecto se basa en la igualdad y el respeto a un pueblo que reivindica su derecho a decidir su destino, por tanto en el respecto a la voz de cada integrante de la comunidad. Por ello, este proyecto esta comprometido en el diálogo social libre y deliberativo que las comunidades han establecido, lo que nos permite  a todos conocernos, confiar, y  llegar a acuerdos en busca del encuentro de saberes, que es un camino hacia la convivencia, el respeto,  la colaboración, y el desarrollo de un discurso procomún. Así, este proyecto se construye y pone el acento en la importancia de los padres y la comunidad como apoyo fundamental a la educación de los niños/as.

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

export default VocesComunidades;
