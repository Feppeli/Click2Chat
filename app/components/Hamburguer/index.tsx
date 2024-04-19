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
                    <a href="">Entre em contato!</a>
                </li>
            </ul>
        </div>
    )
}

export default Hamburguer;