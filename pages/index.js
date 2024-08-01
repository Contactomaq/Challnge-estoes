import Link from 'next/link'; // Importa el componente Link de Next.js
import styles from '../styles/Home.module.css'; // Asegúrate de que la ruta sea correcta

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Gestión de Proyectos</h1>
      <p className={styles.description}>
        Bienvenido a la aplicación de Gestión de Proyectos. Nuestra herramienta está diseñada para ayudarte a organizar y administrar tus proyectos de manera eficiente. Con nuestras funcionalidades, podrás:
      </p>
      <ul className={styles.featureList}>
        <li><strong>Crear Proyectos:</strong> Añade nuevos proyectos desde nuestra interfaz fácil de usar.</li>
        <li><strong>Editar Proyectos:</strong> Modifica los detalles de tus proyectos en cualquier momento para mantener la información actualizada.</li>
        <li><strong>Eliminar Proyectos:</strong> Elimina proyectos que ya no necesites para mantener tu lista organizada y libre de elementos innecesarios.</li>
      </ul>
      <div className={styles.callToAction}>
        <h2>Comienza Ahora</h2>
        <p>
          Para empezar a gestionar tus proyectos, puedes <Link href="/my-project" className={styles.link}>ver tus proyectos actuales</Link> 
          o <Link href="/create-project" className={styles.link}>añadir un nuevo proyecto</Link>.
        </p>
      </div>
    </div>
  );
}
