import MenuIcon from '@mui/icons-material/Menu';
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <nav className={styles.navBar}>
        <h1>Chat2Link</h1>
        <button className={styles.menuButton}>
          <MenuIcon className={styles.menuIcon}></MenuIcon>
        </button>
      </nav>

      <section className={styles.container}>
        <div className={styles.mainApp}>
          <p className={styles.p}>Olá, sou o Click2Chat e facilito sua vida gerando links com textos automáticos para o seu cliente atráves do WhatsAPP.
          </p>

          <textarea className={styles.textArea} placeholder='Digite aqui a sua mensagem...'/>
          <button className={styles.converterButton}>Gerar Link</button>
        </div>
      </section>
    </main>
  );
}
