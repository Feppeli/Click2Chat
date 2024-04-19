import styles from './index.module.css'
import { useState } from 'react'



const Hamburguer = () => {

    return (
        <div className={styles.hamburguerMain}>

            <ul>
                <li>
                    <a href="https://my-web-site-chi.vercel.app/" target='_blank'>Conheça o desenvolvedor!</a>
                </li>
                <li>
                    <a href="https://api.whatsapp.com/send/?phone=5581991274483&text=Ol%C3%A1%2C+preciso+de+um+or%C3%A7amento%21&type=phone_number&app_absent=0">Entre em contato!</a>
                </li>
            </ul>
        </div>
    )
}

export default Hamburguer;