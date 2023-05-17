import React from 'react'
import styles from './NadInterno.module.css'
import Link from 'next/link'

const NadInterno = () => {
    return (
        <div className={styles.menu}>
            <div className={styles.title}>
                <h1> Bienvenido a Auditory</h1>
            </div>
            <div className={styles.box}>
                <Link href={'/'} className={styles.link}><li><ul>Inicio</ul></li></Link>
                <Link href={'/servicio'} className={styles.link}><li><ul>Servicios</ul></li></Link>
                <Link href={'/Contacto'} className={styles.link}><li><ul>Contacto</ul></li></Link>
                {/* <Link href={'/'} className={styles.link}><li><ul>Nosotros</ul></li></Link> */}
            </div>
        </div>
    )
}

export default NadInterno