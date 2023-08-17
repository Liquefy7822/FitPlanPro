import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <img src="/HowTechLogo.jpg" alt="HowTech Logo" className={styles.logo} />
      </footer>
    </>
  )
}
