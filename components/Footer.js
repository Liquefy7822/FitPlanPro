import { useRouter } from 'next/router';
import styles from './Footer.module.css';

export default function Footer() {
  const router = useRouter();

  const goBack = () => {
    router.back();
  };

  return (
    <>
      <footer className={styles.footer}>
        <img src="/HowTechLogo.jpg" alt="HowTech Logo" className={styles.logo} />
        <button onClick={goBack} className={styles.goBackButton}>
          Go Back
        </button>
      </footer>
    </>
  );
}

