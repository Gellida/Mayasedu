
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
                                        autoplay={{ delay: 3500, disableOnInteraction: false }}
                                        style={{ width: '100%', height: '100%' }}
                                    >
                                        {/* Swiper navigation buttons will be rendered automatically */}
                                        <SwiperSlide>
                                            <div className={styles.sliderBg}>
                                                <div className={styles.sliderImgWrapper}>
                                                    <Image src="/1.jpeg" alt="Slider 1" fill style={{objectFit:'contain'}} className={styles.sliderImg} />
                                                </div>
                                                <div className={styles.sliderOverlay}></div>
                                            </div>
                                            <div className={styles.sliderContent}>
                                                <h1 className={styles.sliderTitle}>Bienvenido a MAYAS EDU</h1>
                                                <p className={styles.sliderText}>Nuevas metodologías pedagógicas y lingüísticas, tecnologías abiertas y procesos artísticos dirigidos a estudiantes de ascendencia maya. Comunidades zapatistas y otros. Chiapas, México.</p>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className={styles.sliderBg}>
                                                <div className={styles.sliderImgWrapper}>
                                                    <Image src="/slide2.jpeg" alt="Slider 2" fill style={{objectFit:'contain'}} className={styles.sliderImg} />
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
                                                    <Image src="/slider3.jpeg" alt="Slider 3" fill style={{objectFit:'contain'}} className={styles.sliderImg} />
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
                        <div className={styles.heroLeft}>
                            <Image src="/index1.jpeg" alt="Hero" width={350 } height={500} className={styles.heroImg} />
                        </div>
                        <div className={styles.heroRight}>
                            <h1 className={styles.heroTitle}>Maya sedu</h1>
                            <p className={styles.heroText}>
                                Es un proyecto de mejoramiento lingüístico y educativo, con implementación de procesos artísticos, que surge a partir del llamado realizado por las comunidades mayas de Chiapas, de las zonas Zapatistas, y otros, y de profesores de colegios de primarias.
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