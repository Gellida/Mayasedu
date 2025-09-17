import ContactFormSimple from '../components/ContactFormSimple';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styles from '../styles/Home.module.css';

const Contacto = () => (
  <>
    <Navbar />
    <div style={{ background: '#353535', minHeight: '100vh', padding: '0', margin: '0' }}>
      <div style={{
        background: '#353535',
        color: '#ffffffff',
        padding: '80px 0 32px 0',
        textAlign: 'center',
        fontWeight: 700,
        fontSize: '2.5rem',
        letterSpacing: '1px',
        marginBottom: 0
      }}>
        Contacto
      </div>
      <div style={{
        maxWidth: 900,
        margin: '40px auto',
        background: '#353535',
        borderRadius: 8,
        padding: '32px 24px',
        boxShadow: '0 2px 16px rgba(0,0,0,0.07)'
      }}>
        <ContactFormSimple />
      </div>
      <Footer />
    </div>
  </>
);

export default Contacto;
