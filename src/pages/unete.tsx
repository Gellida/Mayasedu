import React from 'react';


import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Navbar from '../components/Navbar';

const miembros = [
  { nombre: 'Dra. Lynda Avendaño Santana', rol: 'IP - Investigadora Principal', imagen: '/miembros/1.png', link: '#', descripcion: 'Historiadora del Arte, especialista en arte y nuevas tecnologías y decolonialidad digital. Inv. CIELA - Centro de Investigaciones Latinoamericanas de la Universidad de Chile UCH. Inv. AGI - Art, Globalization, Interculturality. Departament d\'Història de l\'Art Facultat de Geografia i Historia, Universitat de Barcelona - UB/Inv. -SU+MA Universidad y Museo de la Universidad Complutense de Madrid. (Chile/España).' },
  { nombre: 'Prof. Luis Roque', rol: 'Co-IP Co-Investigador Principal', imagen: '/miembros/2.png', link: '#', descripcion: 'Director del Colegio Simón Bolívar. Comunidad de Simojovel, Chiapas. Máster en Educación por la Universidad Autónoma de Madrid UAM. (México).' },
  { nombre: 'Dr. Walter Mignolo', rol: 'Decolonialista', imagen: '/miembros/3.png', link: '#', descripcion: 'Semiólogo y profesor emérito de literatura en la Universidad de Duke (Estados Unidos). Miembro fundador del Grupo modernidad/colonialidad.' },
  { nombre: 'Dr. Theophile Ambadiang', rol: 'Lingüista', imagen: '/miembros/4.png', link: '#', descripcion: 'Profesor titular del Depto. de Lingüística General, Lógica, Lenguas Modernas y Teoría de la literatura y Literatura Comparada en la UAM - Universidad Autónoma de Madrid, Depto. del cual ha sido su director. Presidente de la Asociación de Africanistas de España (Camerún/España).' },
  { nombre: 'Dr. Antonio Lafuente', rol: 'Científico', imagen: '/miembros/5.png', link: '#', descripcion: 'Investigador emérito del Depto. de Historia de la Ciencias del CSIC - Centro Superior de Investigaciones Científicas, donde ha sido director de dicho Depto. Activista del procomún (España).' },
  { nombre: 'Dr. Alfredo Vicent', rol: 'Músico', imagen: '/miembros/6.png', link: '#', descripcion: 'Discípulo de Narciso Yepes, musicólogo y filósofo. Profesor Contratado Doctor en el Depto. de Música de la UAM - Universidad Autónoma de Madrid (España).' },
  { nombre: 'Dr. Enrique Téllez Fabiani', rol: 'Filósofo y físico', imagen: '/miembros/7.png', link: '#', descripcion: 'Filósofo de la teoría de la liberación, y físico. Profesor de la UNAM - Universidad Nacional Autónoma de México y la de la Universidad Iberoamericana (México).' },
  { nombre: 'Olivia Sierra', rol: 'Filósofa', imagen: '/miembros/8.png', link: '#', descripcion: 'Filósofa de la teoría de la liberación y de la decolonialidad. Prof. de secundaria en la CDMX. Máster en Filosofía por la UNAM de México y Dra. (C) en esa misma universidad. (México).' },
  { nombre: 'Mario Soro', rol: 'Artista visual', imagen: '/miembros/9.png', link: '#', descripcion: 'Artista visual, ex Vicerrector de la Universidad Arcis (Chile).' },
  { nombre: 'Antonio Villagrán', rol: 'Concertista y profesor', imagen: '/miembros/10.png', link: '#', descripcion: 'Concertista en guitarra y profesor en escuelas rurales e indígenas (Chile/Argentina).' },
  { nombre: 'José Gellida Coutiño', rol: 'Ingeniero de software', imagen: '/miembros/11.jpeg', link: '#', descripcion: 'Desarrollador web y móvil con experiencia en proyectos empresariales y servicios digitales. Especialista en la creación de aplicaciones multiplataforma, aportando soluciones escalables y centradas en la experiencia del usuario.  México' },
  { nombre: 'Dr. Christophe Ventura', rol: 'Cientista político', imagen: '/miembros/12.png', link: '#', descripcion: 'Director de investigación en el IRIS - Institut de Relations Internationales et Stratégiques. Miembro del equipo editorial de Le Monde diplomatique, a cargo de América Latina, realiza con regularidad misiones en la región -Argentina, Brasil, Cuba, México, América Central, Venezuela, Uruguay- (Francia).' },
  { nombre: 'Dr. Walter Lippol', rol: 'Historiador', imagen: '/miembros/13.png', link: '#', descripcion: 'Historiador, especialista en Colonialismo digital. Universidade Federal do Rio Grande do Sul (Brasil).' },
  { nombre: 'Ricardo Vega', rol: 'Diseñador y artivista digital', imagen: '/miembros/14.png', link: '#', descripcion: 'Máster en Diseño por Parsons School of Design (NY) y Dr. (C) en la Pontificia Universidad Católica de Chile - PUC. Diseñador y artivista digital. Profesor de Diseño en la PUC (Chile).' },
  { nombre: 'Yto Aranda', rol: 'Artista de nuevos medios', imagen: '/miembros/15.png', link: '#', descripcion: 'Artista de los nuevos medios y ecoartivista digital (Chile).' },
  { nombre: 'Nello Petrucci', rol: 'Artista', imagen: '/miembros/16.png', link: '#', descripcion: 'Artista -Street artista- (Italia).' },
  { nombre: 'Jerome Godichon', rol: 'Fotógrafo y diseñador', imagen: '/miembros/17.png', link: '#', descripcion: 'Fotógrafo y diseñador (Francia).' },
  // Apoyo institucional
  { nombre: 'Belisario Balzeca Arrazola', rol: 'Jefe del Sector 14', imagen: '/miembros/18.png', link: '#', descripcion: 'Responsable de 70 colegios o centros de trabajo. Palenque, Chiapas.' },
  { nombre: 'Epigmenio Trejo Flores', rol: 'Supervisor escolar de la zona 155', imagen: '/miembros/19.jpg', link: '#', descripcion: 'Responsable de 11 colegios o centros de trabajo. Huitiupán, Chiapas.' },
  { nombre: 'Romeo Diego Mijangos Guzmán', rol: 'Supervisor escolar de la zona 093', imagen: '/miembros/20.jpg', link: '#', descripcion: 'Responsable de 15 colegios o centros de trabajo. Simojovel, Chiapas.' },
  // Profesores
  { nombre: 'Profesor Luis Alberto Roque Vázquez', rol: 'Director Colegio Simón Bolívar', imagen: '/miembros/21.jpg', link: '#', descripcion: 'Simojovel, Chiapas.' },
  { nombre: 'Profesora Viviana López Ramírez', rol: 'Colegio Simón Bolívar', imagen: '/miembros/22.png', link: '#', descripcion: 'Simojovel, Chiapas.' },
  // Profesores integrantes del equipo de traducción
  { nombre: 'Juan Gutiérrez Jiménez', rol: 'Equipo de traducción', imagen: '/miembros/23.jpg', link: '#', descripcion: '' },
  { nombre: 'Margarita Nicolás García', rol: 'Equipo de traducción', imagen: '/miembros/24.jpg', link: '#', descripcion: '' },
  { nombre: 'Rodrigo López', rol: 'Equipo de traducción', imagen: '/miembros/25.jpg', link: '#', descripcion: 'Huitiupán, Chiapas.' },
  { nombre: 'Miguel Gómez Hernández', rol: 'Equipo de traducción', imagen: '/miembros/26.jpg', link: '#', descripcion: '' },
  { nombre: 'Hilario López', rol: 'Equipo de traducción', imagen: '/miembros/27.jpg', link: '#', descripcion: 'Huitiupán, Chiapas.' },
  { nombre: 'Manuel Santiago López Gómez', rol: 'Equipo de traducción', imagen: '/miembros/28.png', link: '#', descripcion: '' },
  { nombre: 'Alondra del Carmen Nataren Pérez', rol: 'Equipo de traducción', imagen: '/miembros/29.jpg', link: '#', descripcion: '' },
  { nombre: 'Servin Juárez Morales', rol: 'Equipo de traducción', imagen: '/miembros/30.png', link: '#', descripcion: '' },
  { nombre: 'Ulises Thomas López Gómez', rol: 'Equipo de traducción', imagen: '/miembros/31.jpg', link: '#', descripcion: '' },
  { nombre: 'Manuel Enrique Mena Hernández', rol: 'Equipo de traducción', imagen: '/miembros/32.jpg', link: '#', descripcion: '' },
  { nombre: 'Bethzy Alheli Gutiérrez Álvarez', rol: 'Equipo de traducción', imagen: '/miembros/33.jpg', link: '#', descripcion: '' },
  { nombre: 'Erik Omar Hernández Rodríguez', rol: 'Equipo de traducción', imagen: '/miembros/34.jpg', link: '#', descripcion: '' },
  { nombre: 'Martha Lizeth Morales Gómez', rol: 'Equipo de traducción', imagen: '/miembros/35.jpg', link: '#', descripcion: '' },
  { nombre: 'Adilene Belén Lievano Zarate', rol: 'Equipo de traducción', imagen: '/miembros/36.jpg', link: '#', descripcion: '' },
  { nombre: 'Mario Alberto Castillo Salinas', rol: 'Equipo de traducción', imagen: '/miembros/37.jpg', link: '#', descripcion: '' },
];



import { useState } from 'react';

const Unete = () => {
  const [modalIdx, setModalIdx] = useState<number|null>(null);

  return (
    <div className={styles.landingBg} style={{minHeight: '100vh', minWidth: 0}}>
      <Navbar />
      <main style={{padding: '60px 24px', background: 'transparent', minHeight: '100vh'}}>
        <h1 style={{textAlign: 'center', fontWeight: 700, fontSize: '2.5rem', margin: '32px 0 12px', color: '#fff'}}>Nuestro equipo</h1>
        <p style={{textAlign: 'center', fontSize: '1.15rem', marginBottom: 36, color: '#bdbdbd'}}>”El Verdadero salto consiste en introducir la invención a la existencia.” Frantz Fanon. Piel negra, máscaras blancas</p>
        <section className={styles.miembrosGrid}>
          {miembros.map((m, idx) => (
            <div
              key={idx}
              className={styles.miembroCard}
              style={{background: '#2d2d2d', color: '#fff', position: 'relative', overflow: 'hidden', cursor: 'pointer'}}
              onClick={() => setModalIdx(idx)}
              tabIndex={0}
              role="button"
              aria-label={`Ver información de ${m.nombre}`}
            >
              <Image src={m.imagen} alt={m.nombre} width={140} height={140} className={styles.miembroImg} style={{borderRadius: 6, objectFit: 'cover', marginBottom: 12}} />
              <span className={styles.miembroNombre} style={{color: '#fff', cursor: 'pointer', textDecoration: 'underline'}}>{m.nombre}</span>
              <span className={styles.miembroRol} style={{color: '#b6ff00'}}>{m.rol}</span>
            </div>
          ))}
        </section>

        {/* Modal */}
        {modalIdx !== null && (
          <div
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100vw',
              height: '100vh',
              background: 'rgba(0,0,0,0.7)',
              zIndex: 1000,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onClick={() => setModalIdx(null)}
          >
            <div
              style={{
                background: '#232323',
                borderRadius: 16,
                padding: 36,
                minWidth: 320,
                maxWidth: 420,
                boxShadow: '0 8px 32px #000a',
                color: '#fff',
                position: 'relative',
                textAlign: 'center',
              }}
              onClick={e => e.stopPropagation()}
            >
              <button
                onClick={() => setModalIdx(null)}
                style={{
                  position: 'absolute',
                  top: 12,
                  right: 16,
                  background: 'transparent',
                  border: 'none',
                  color: '#fff',
                  fontSize: 24,
                  cursor: 'pointer',
                }}
                aria-label="Cerrar"
              >×</button>
              <Image src={miembros[modalIdx].imagen} alt={miembros[modalIdx].nombre} width={140} height={140} style={{borderRadius: 8, objectFit: 'cover', marginBottom: 18}} />
              <h2 style={{fontWeight: 700, fontSize: '1.3rem', marginBottom: 6}}>{miembros[modalIdx].nombre}</h2>
              <div style={{color: '#b6ff00', fontWeight: 500, marginBottom: 12}}>{miembros[modalIdx].rol}</div>
              <div style={{fontSize: '1.05rem', color: '#fff', marginBottom: 8}}>{miembros[modalIdx].descripcion}</div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Unete;
