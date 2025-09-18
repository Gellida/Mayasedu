import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Head from 'next/head';
import Image from 'next/image';

import Link from 'next/link';
import styles from '../styles/Home.module.css';
import Navbar from '../components/Navbar';
import Footer from 'components/Footer';

    const Home: React.FC = () => {
        return (
            <div className={styles.landingBg}>
                <Head>
                    <title>Maya sedu</title>
                    <meta name="description" content="Landing page Maya sedu" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <Navbar />
                                {/* Slider Hero funcional con Swiper */}
                                <section className={styles.sliderHero}>
                                    <Swiper
                                        modules={[Autoplay, Navigation, Pagination]}
                                        navigation={true}
                                        pagination={{ clickable: true }}
                                        spaceBetween={0}
                                        slidesPerView={1}
                                        loop={true}
                                        autoplay={{ delay: 4000, disableOnInteraction: false }}
                                        style={{ width: '100%', height: '100%'}}
                                    >
                                        {/* Swiper navigation buttons will be rendered automatically */}
                                        <SwiperSlide>
                                            <div className={styles.sliderBg}>
                                                <div className={styles.sliderImgWrapper}>
                                                    <Image src="/slide2.jpeg" alt="Slider 1" fill style={{objectFit:'cover'}} className={styles.sliderImg} priority />
                                                </div>  
                                            </div>
                                            <div className={styles.sliderContent}>
                                                <h1 className={styles.sliderTitle}>Bienvenido a MAYA SEDU</h1>
                                                <p className={styles.sliderText}>Nuevas metodologías pedagógicas y lingüísticas, tecnologías abiertas y procesos artísticos dirigidos a estudiantes de ascendencia maya. Comunidades zapatistas y otros. Chiapas, México.</p>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className={styles.sliderBg}>
                                                <div className={styles.sliderImgWrapper}>
                                                    <Image src="/1.jpeg" alt="Slider 2" fill style={{objectFit:'cover'}} className={styles.sliderImg} />
                                                </div>
                                                <div className={styles.sliderOverlay}></div>
                                            </div>
                                            <div className={styles.sliderContent}>
                                                <h1 className={styles.sliderTitle}>Lenguas vivas</h1>
                                                <p className={styles.sliderText}>Celebrando la diversidad lingüística y cultural de los pueblos mayas.</p>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className={styles.sliderBg}>
                                                <div className={styles.sliderImgWrapper}>
                                                    <Image src="/slider3.jpeg" alt="Slider 3" fill style={{objectFit:'cover'}} className={styles.sliderImg} />
                                                </div>
                                                <div className={styles.sliderOverlay}></div>
                                            </div>
                                            <div className={styles.sliderContent}>
                                                <h1 className={styles.sliderTitle}>Innovación educativa</h1>
                                                <p className={styles.sliderText}>Nuevas metodologías para el aprendizaje y la preservación cultural.</p>
                                            </div>
                                        </SwiperSlide>
                                    </Swiper>
                                </section>
                <main className={styles.sectionsContainer}>
                    {/* Hero principal */}
                    <section className={styles.heroSection}>
                        <div className={styles.heroContent}>
                            <h1 className={styles.heroTitle}>Nuevas metodologías lingüísticas , educativas y  procesos artísticos dirigidos a estudiantes de ascendencia maya (Comunidades Zapatistas y otros, Chiapas,  México). </h1>
                            <p className={styles.heroText}>
Nuevas metodologías educativas , lingüísticas y procesos artísticos dirigidos a estudiantes de ascendencia maya (Chiapas, México). Su objetivo es  desarrollar un proyecto activo, dialogante, afectuoso, empático  en cooperación con las  comunidades de ascendencia maya de Chiapas,  de las zonas Zapatistas, y otros, por tanto, con los Comités de padres de familia, los profesores y los niños para  la formación educativa de los niños/as de primaria, sobre todo en lengua española y profundización de sus lenguas  originarias , promoviendo dichos procesos a través , entre otros, de las artes,  además de  fomentar el desarrollo de las  artes visuales  a partir de las  culturas  locales en concomitancias con artistas respetuosos de ellas. 
Este proyecto promueve la transferencia tecnológica , la cultura libre  y la innovación de Inteligencia artificial, centrada entre otros en los lenguajes y hablas mayas y el español.  <br /><br />
Somos un equipo multidisciplinar compuesto por profesionales de distintas disciplinas, entre los cuales se cuentan profesores  de distintas  universidades de Europa, África y  Latinoamérica , se incluyen profesores de enseñanza en educación primaria del Estado de Chiapas, investigadores con formación en lingüística, pedagogía, artes, música e ingeniería.
Este proyecto cuenta  con el apoyo del Jefe del Sector 14. Responsable de 70 colegios o centros de trabajo y de Supervisores escolares de las zonas 93 , 155, y de  profesores  de dichas  zonas, responsables ellos de  colegios o centros de trabajo, y de los Comités de padres de familia. Y cuenta con el apoyo de  comunidades como las comunidades de Simojovel, el Salto de Agua, Tila y Palenque. 
Los beneficiados con este proyecto son los 96 colegios, como aquellos profesores y escuelas que se unan a este proyecto <br /> <br />Las principales áreas del proyecto son:
                            </p>
                            
                        </div>
                    </section>
                    {/* Cuadros tipo grid para las "páginas" */}
                    <section className={styles.gridSection}>
                        <Link href="/en-terreno" className={styles.gridBox} data-preview="Visita, registro y acompañamiento en comunidades y escuelas."><h3>En Terreno</h3><p>Trabajo directo con comunidades y escuelas.</p></Link>
                        <Link href="/voces-comunidades" className={styles.gridBox} data-preview="Historias, voces y experiencias de los habitantes locales."><h3>Voces de las Comunidades</h3><p>Testimonios y experiencias.</p></Link>
                        <Link href="/docentes-comunidades" className={styles.gridBox} data-preview="Docentes y comunidades dialogan, crean y construyen educación juntos."><h3>Docentes y Comunidades</h3><p>Educación colaborativa.</p></Link>
                        <Link href="/tradiciones" className={styles.gridBox} data-preview="Recuperación de tradiciones, costumbres y saberes ancestrales."><h3>Tradiciones Recuperadas</h3><p>Saberes ancestrales y cultura.</p></Link>
                        <Link href="/metodologias" className={styles.gridBox} data-preview="Metodologías innovadoras y participativas para la educación intercultural."><h3>Metodologías Educativas</h3><p>Innovación y participación.</p></Link>
                        <Link href="/actividades" className={styles.gridBox} data-preview="Talleres, juegos y actividades educativas para niños y jóvenes."><h3>Actividades Educativas</h3><p>Talleres y dinámicas.</p></Link>
                        <Link href="/producciones" className={styles.gridBox} data-preview="Obras, proyectos y creaciones de los estudiantes en las escuelas."><h3>Producciones Escolares</h3><p>Obras y proyectos de los niños.</p></Link>
                        <Link href="/recursos-linguisticos" className={styles.gridBox} data-preview="Materiales y recursos en lenguas originarias: Chol, Tzeltal, Tzotzil y español."><h3>Recursos Lingüísticos</h3><p>Materiales en lenguas originarias.</p></Link>
                        <Link href="/sintesis-habla" className={styles.gridBox} data-preview="Tecnología para síntesis y reconocimiento del habla en lenguas mayas."><h3>Síntesis y Reconocimiento del Habla</h3><p>Tecnología para lenguas mayas.</p></Link>
                        <Link href="/aprendizaje-lenguas" className={styles.gridBox} data-preview="Recursos y actividades para aprender Chol, Tzeltal y Tzotzil."><h3>Aprendizaje de Lenguas Mayas</h3><p>Recursos para aprender Chol, Tzeltal y Tzotzil.</p></Link>
                        <Link href="/diccionarios" className={styles.gridBox} data-preview="Diccionarios y traductores digitales bilingües para las lenguas mayas."><h3>Diccionarios y Traductores</h3><p>Herramientas digitales bilingües.</p></Link>
                        <Link href="/tecnologias" className={styles.gridBox} data-preview="Tecnologías abiertas y apropiación tecnológica por las comunidades."><h3>Tecnologías Abiertas</h3><p>Apropiación tecnológica comunitaria.</p></Link>
                        <Link href="/arte" className={styles.gridBox} data-preview="Procesos artísticos, culturales y creativos en escuelas y comunidades."><h3>Arte en Escuelas</h3><p>Procesos artísticos y culturales.</p></Link>
                        <Link href="/colaboracion" className={styles.gridBox} data-preview="Apoyo solidario para escuelas y niños con mayores carencias."><h3>Colaboración Solidaria</h3><p>Apoyo a escuelas y niños con carencias.</p></Link>
                    </section>
                </main>
                <Footer />
            </div>
        );
    };

    export default Home;