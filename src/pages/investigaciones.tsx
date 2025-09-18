import React from 'react';
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

const Investigaciones = () => (
  <div className={styles.landingBg} style={{ minHeight: '100vh', minWidth: 0 }}>
    <Navbar />
    <main style={{ padding: '80px 0 40px 0', minHeight: '80vh' }}>
      <section style={cardStyle}>
        <h1 style={{ fontWeight: 700, fontSize: '2.2rem', color: '#C19A32', marginBottom: 10, textAlign: 'center', letterSpacing: 1 }}>Investigaciones</h1>
        <h2 style={{ fontSize: '1.3rem', color: '#e6c24d', marginBottom: 18, textAlign: 'center' }}>Textos producidos por los investigadores y textos relevantes para el proyecto</h2>
        <p style={{ fontSize: '1.13rem', color: '#fffbe7', marginBottom: 18, textAlign: 'center' }}>
          En esta sección encontrarás una selección de investigaciones, artículos y textos clave que abordan temas de lenguas mayas, educación intercultural, metodologías, arte y tecnología, producidos por el equipo del proyecto y colaboradores.
        </p>
        <div style={{ margin: '24px 0' }}>
          <h3 style={{ color: '#e6c24d', fontSize: '1.13rem', marginBottom: 8 }}>Descarga el compendio de textos</h3>
          <a href="/Textos.pdf" target="_blank" rel="noopener noreferrer" style={{ color: '#e6c24d', textDecoration: 'underline', fontWeight: 500, fontSize: '1.08rem' }}>
            Descargar PDF: Textos producidos por los investigadores y textos relevantes para el proyecto
          </a>
        </div>
        <div style={{ margin: '32px 0 0 0' }}>
          <h3 style={{ color: '#e6c24d', fontSize: '1.13rem', marginBottom: 8 }}>Textos destacados</h3>
          <ul style={{ color: '#bdbdbd', fontSize: '1.05rem', marginBottom: 0, paddingLeft: 24, listStyle: 'disc' }}>
            <li>Ambadiang, T. (1994). <i>Morfología Flexiva</i>. Taurus.</li>
            <li>Avendaño Santana, L. (2023). Free online circulation of academic and artistic knowledge in cognitive capitalism. En VV. AA, <i>Handbook of academic knowledge circulation</i>. London: Routledge.</li>
            <li>Avendaño Santana, L. (2021). Reseña del libro: <i>Ecoxicanismo. Autoras chicanas y justicia medioambiental</i>, Maite Aperribay-Bermejo PUV Universitat de Valencia. asparkia, 162-182.</li>
            <li>Avendaño Santana, L. (2021). Lateral Thinking and Learning in Arts Education in the Post-Internet Art. In <i>Oxford Research Encyclopedia of Education</i>. Oxford University Press. https://doi.org/10.1093/acrefore/9780190264093.013.1492</li>
            <li>Bidaseca, K. (2016). <i>Feminismos y decolonialidad en Abya Yala</i>. CLACSO.</li>
            <li>Cagliari, P. (2018). <i>Loris Malaguzzi y las escuelas de Reggio Emilia : una selección de textos y discursos de 1945 a 1993</i>. Madrid: Ministerio de Educacion, Cultura y Deporte, Secretaría General Técnica Morata.</li>
            <li>Corsín Jiménez, A., & Lafuente, A. (2010). Comunidades de afectados, procomún y don expandido. <i>Fractal, XV(57)</i>, 17-42. https://www.mxfractal.org/RevistaFractal57AntonioLafuente.html</li>
            <li>Dussel, Enrique. (2018). Cultura Venezuela. Obtenido de Enrique Dussel: Decolonialidad y Educación: https://culturavenezuela.com/enrique-dussel-decolonialidad-y-educacion/</li>
            <li>Dussel, E. (1998). <i>Ética de la liberación en la edad de la globalización y de la exclusión</i>. Editorial Trotta.</li>
            <li>Eisner, E. W. (2002). <i>The arts and the creation of mind</i>. Yale University Press.</li>
            <li>Freire, Pablo. (1967). <i>La Educación como práctica de la libertad</i>. Siglo XXI.</li>
            <li>Freire, P. (1970). <i>Pedagogía del oprimido</i>. Siglo XXI Editores.</li>
            <li>Gombrich, E. (1998). <i>Meditaciones sobre un caballo de juguete o Las raíces de la forma artística</i>. Debate.</li>
            <li>Grosfoguel, R. (2016). Del “extractivismo económico” al “extractivismo epistémico” y al “extractivismo ontológico”. <i>Tabula Rasa, 24</i>, 123–143. https://doi.org/10.25058/20112742.n24.06</li>
            <li>Hornberger, N. H. (2008). <i>Can schools save Indigenous languages? Policy and practice on four continents</i>. Palgrave Macmillan.</li>
            <li>Lafuente, A. (2013). <i>El laboratorio de lo común</i>. Círculo de Bellas Artes.</li>
            <li>Lazzarato, M. (2006). <i>Por una política menor: acontecimiento y política en las sociedades de control</i>, Madrid: Traficantes de Sueños.</li>
            <li>Mignolo, Walter. (2012). <i>La Herida Colonial y la Opción Decolonial</i>. Gedisa.</li>
            <li>Mignolo, Walter. (2013). <i>De la hermenéutica y la semiosis colonial al pensar descolonial</i>. Abya-Yala.</li>
            <li>Peña-Hen, J. (2013). ¿Qué es la música?. El Observatorio.</li>
            <li>Quijano. (2020). <i>Por la imaginación política. De la socialización a la descolonialidad del poder</i>. PDGT</li>
            <li>Téllez Fabiani, E. (2024). Dussel, la política y la crítica de las categorías. <i>Eunomía. Revista en Cultura de la Legalidad, 26</i>, pp. 448-466 DOI: https://doi.org/10.20318/eunomia.2024.8522</li>
            <li>Vercellone, C. (2004). Las políticas de desarrollo en tiempos del capitalismo cognitivo. En O. Blondeau & Others, <i>Capitalismo cognitivo, Propiedad intelectual y creación colectiva</i>. Madrid: Traficantes de Sueños.</li>
            <li>VV.AA. (2022). <i>Discursos intervinientes: Mujeres y arte actual</i>. (L. Avendaño Santana, M. Carabias, & A. Blanco, Edits.) Madrid: Editorial Dykinson.</li>
            <li>WALSH Catherine, “Interculturalidad y colonialidad del poder. Un pensamiento y posicionamiento otro desde la diferencia colonial”, en GARCÍA LINERA Álvaro, MIGNOLO Walter, WALSH Catherine, <i>Interculturalidad, descolonización del Estado y del conocimiento</i>, Ediciones del signo, Argentina: 2006, p. 21-70.</li>
            <li>Zavala, V. (2015). <i>Lenguas y poder en el Perú: Hacia una educación intercultural bilingüe crítica</i>. Pontificia Universidad Católica del Perú.</li>
            <li>Zafra, R. (2003). <i>Habitar en (punto) net: estudios sobre mujer, educación e internet</i>. Córdoba: Universidad de Córdoba. Servicio de publicaciones.</li>
            <li>Zielinsky, S. (2012). <i>Arqueologia de los meedios. Hacia el tiempo profundo de la vision y la audicion técnica</i>. Bogota: Universidad de los Andes.</li>
            <li>Zielinsky, S. (2019). <i>Variations on media thinking (posthumanities)</i>. Minnesota: Minnesota Univ. Press.</li>
          </ul>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default Investigaciones;
