import React from 'react';
import styles from '../styles/Home.module.css';
import Image from 'next/image';

const Footer = () => (
  <footer className={styles.footerCustom}>
    <div className={styles.footerContent}>
      <div className={styles.footerLeft}>
        <h3>Mayasedu lo conforman<br />los siguientes grupos de investigación:</h3>
      </div>
      <div className={styles.footerRight}>
        <div className={styles.footerLogos}>
          <Image src="/logo_mayasedu.png" alt="mayasedu" width={70} height={70} />
          <Image src="/logo_ciela.png" alt="ciela logo" width={60} height={60} />
          <Image src="/logo_chile.webp" alt="logo chile" width={70} height={80} />
        </div>
        <div className={styles.footerLinks}>
          <a href="/contacto" className={styles.footerContact}>
            <span style={{marginRight: 8}}>Contacto</span>
          </a>
          <a href="#" className={styles.footerContact}>Privado</a>
        </div>
      </div>
    </div>
    <hr className={styles.footerDivider} />
    <div className={styles.footerBottom}>
      <span>chiapas.proyectomexico24@gmail.com Copyright © 2025</span>
      <div className={styles.footerIcons}>
        <a href="#" aria-label="YouTube" target="_blank" rel="noopener noreferrer" style={{display:'flex'}}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.498 6.186a2.994 2.994 0 0 0-2.107-2.12C19.228 3.5 12 3.5 12 3.5s-7.228 0-9.391.566A2.994 2.994 0 0 0 .502 6.186C0 8.36 0 12 0 12s0 3.64.502 5.814a2.994 2.994 0 0 0 2.107 2.12C4.772 20.5 12 20.5 12 20.5s7.228 0 9.391-.566a2.994 2.994 0 0 0 2.107-2.12C24 15.64 24 12 24 12s0-3.64-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" fill="#e53935"/></svg>
        </a>
        <a href="https://www.facebook.com/profile.php?id=61574430698216" aria-label="Facebook" target="_blank" rel="noopener noreferrer" style={{display:'flex'}}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.405 24 24 23.408 24 22.674V1.326C24 .592 23.405 0 22.675 0" fill="#1877f3"/><path d="M16.671 24v-9.294h3.12l.467-3.622h-3.587V8.771c0-1.048.293-1.763 1.797-1.763l1.918-.001v-3.24c-.334-.044-1.472-.143-2.797-.143-2.766 0-4.659 1.688-4.659 4.788v2.13H9.692v3.622h3.128V24h3.851z" fill="#fff"/></svg>
        </a>
        <a href="#" aria-label="Instagram" target="_blank" rel="noopener noreferrer" style={{display:'flex'}}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="24" height="24" rx="6" fill="#E1306C"/><path d="M12 7.2A4.8 4.8 0 1 0 12 16.8A4.8 4.8 0 1 0 12 7.2Z" fill="#fff"/><circle cx="18.2" cy="5.8" r="1.2" fill="#fff"/></svg>
        </a>
        <a href="#" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer" style={{display:'flex'}}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.23 0H1.77C.792 0 0 .771 0 1.723V22.28C0 23.229.792 24 1.77 24h20.46C23.208 24 24 23.229 24 22.277V1.723C24 .771 23.208 0 22.23 0zM7.12 20.452H3.56V9h3.56v11.452zM5.34 7.633a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM20.452 20.452h-3.56v-5.605c0-1.336-.025-3.057-1.865-3.057-1.867 0-2.153 1.457-2.153 2.963v5.699h-3.56V9h3.418v1.561h.049c.476-.899 1.637-1.847 3.37-1.847 3.602 0 4.267 2.37 4.267 5.455v6.283z" fill="#0077b5"/></svg>
        </a>
        <a href="mailto:chiapas.proyectomexico24@gmail.com" aria-label="Mail" target="_blank" rel="noopener noreferrer" style={{display:'flex'}}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 13.065L2.4 6.6V18h19.2V6.6l-9.6 6.465zm9.6-10.065H2.4A2.4 2.4 0 0 0 0 5.4v13.2A2.4 2.4 0 0 0 2.4 21h19.2a2.4 2.4 0 0 0 2.4-2.4V5.4a2.4 2.4 0 0 0-2.4-2.4zM12 11.535L21.6 5.4H2.4L12 11.535z" fill="#e6c24d"/></svg>
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
