import Link from 'next/link'; // Importa el componente Link de Next.js
import styles from './Footer.module.css'; // Importa los estilos del footer

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.footerText}>
        © {new Date().getFullYear()} Gestión de Proyectos. Todos los derechos reservados.
      </p>
      <div className={styles.footerLinks}>
        <Link href="/about" className={styles.footerLink}>Acerca de</Link>
        <Link href="/contact" className={styles.footerLink}>Contacto</Link>
        <Link href="/privacy" className={styles.footerLink}>Política de Privacidad</Link>
      </div>
    </footer>
  );
}
