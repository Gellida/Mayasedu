import React from 'react';
import Navbar from '../components/Navbar';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

const RecursosLinguisticos = () => (
 <div className={styles.landingBg} style={{minHeight: '100vh'}}>
    <Navbar />
    <main style={{maxWidth: 1100, margin: '0 auto', padding: '120px 16px 0 16px'}}>
      <h1 style={{textAlign: 'center', fontWeight: 800, fontSize: '2.7rem', margin: '0 0 36px 0', color: '#C19A32'}}>       Recursos lingüísticos Chol,  Tzeltal, Tzotzil y español 


      </h1>
      <section style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 36}}>
        <div style={{maxWidth: 800, margin: '0 auto', color: '#232323', background: '#fff', borderRadius: 12, padding: '32px 36px', boxShadow: '0 2px 16px #0001', fontSize: '1.15rem', lineHeight: 1.7}}>
        Las producciones realizadas por nuestros niños/as  tienen un alto grado de contenido simbólico y cultural, ya que, forman parte del diario quehacer y  expresan su modo de convivencia de los mismos. 
Las producciones de corte cultural y musical de los niños y niñas, son elementos de consideración dentro de la expresión y recuperación en diversos procesos, por ejemplo, en el rescate de las lenguas, así como expresiones artísticas enfocadas a la multiculturalidad de los pueblos originarios esa parte del mundo.
  
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

export default RecursosLinguisticos;
