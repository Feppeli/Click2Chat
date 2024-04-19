'use client'
import MenuIcon from '@mui/icons-material/Menu';
import styles from "./page.module.css";
import { useState } from 'react';
import Hamburguer from './components/Hamburguer/index';

export default function Home() {

  const [link, setLink] = useState("")
  const [modal, setModal] = useState(false)
  const [menu, setMenu] = useState(false)
  const [formValues, setFormValues] = useState({
    text: "",
    phoneNumber: ""
  })

  const genLink = (event: any) => {
    event.preventDefault()
    let textReplaceSpaces = formValues.text.replace(/ /g, "+")
    let final_link = `https://wa.me/55${formValues.phoneNumber}?text=${textReplaceSpaces}`

    setLink(final_link)
    console.log(final_link)
    setModal(true)
  }

  const closeModal = () => {
    setModal(false)
  }

  const handleClick = () => {
    setMenu(!menu)
  }

  return (
    <main className={styles.main}>
      <nav className={styles.navBar}>
        <h1>Chat2Link</h1>
        <button className={styles.menuButton} onClick={handleClick}>
          <MenuIcon className={styles.menuIcon}></MenuIcon>
        </button>
      </nav>

      <section className={styles.container}>
        <div className={styles.mainApp}>
          <p className={styles.p}>Olá, sou o Click2Chat e facilito sua vida gerando links com textos automáticos para o seu cliente atráves do WhatsAPP.
          </p>

          <input type='number' placeholder='Digite aqui o seu número' id='phoneNumber' className={styles.phoneNumber} onChange={(e) => setFormValues({
            ...formValues, phoneNumber: e.target.value
          })}></input>
          <textarea className={styles.textArea} id="textArea" placeholder='Digite aqui a sua mensagem...'onChange={(e) => setFormValues({
            ...formValues, text: e.target.value
          })}/>
          <button className={styles.converterButton} onClick={genLink}>Gerar Link</button>
        </div>

      </section>
          {modal && <div className={styles.linkModal}>
          {/* Link Modal */}
          <div  className={styles.linkBox}>
          < span>Proto!! Aqui está o link para o seu chat. :)</span>

            <a className={styles.link} target='_blank' href={link}>{link}</a>
            <button onClick={closeModal}>Fechar</button>
          </div>
        </div>}

        {menu && <Hamburguer/>}
    </main>
  );
}
