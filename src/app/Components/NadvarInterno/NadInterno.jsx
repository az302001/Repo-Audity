'use client';

import React, { useEffect, useState } from 'react'
import styles from './NadInterno.module.css'
import Link from 'next/link'

import menu from '../../../../public/Assets/Menu.png'
import Image from 'next/image'

const NadInterno = () => {
    const [estado, setEstado] = useState("")
    const togglemenu = () => {
        estado ? setEstado("") : setEstado(styles.visible)
    }

    useEffect(() => {
        const responsive = document.getElementById('menu')
        estado ? responsive?.classList.add(estado) : responsive?.classList.remove(styles.visible)
    }, [estado, setEstado])



    return (

        <div>
            <div className={styles.btnMenu}>
                <Image src={menu} alt={menu} onClick={togglemenu} className={styles.iconMenu}/>
            </div>
            <div className={styles.menu} >
                <div className={styles.title}>
                    <h1> Bienvenido a Auditory</h1>
                </div>
                <div className={styles.box}>
                    <Link href={'/'} className={styles.link}><li><ul>Inicio</ul></li></Link>
                    <Link href={'/servicio'} className={styles.link}><li><ul>Servicios</ul></li></Link>
                    <Link href={'/Contacto'} className={styles.link}><li><ul>Contacto</ul></li></Link>
                </div>

            </div>

            <div id='menu' className={styles.menuResponsive}>
        
                <div className={styles.titleR}>
                    <h1> Bienvenido a Auditory</h1>
                </div>
                <div className={styles.boxR}>
                    <Link href={'/'} className={styles.linkR}><li><ul>Inicio</ul></li></Link>
                    <Link href={'/servicio'} className={styles.linkR}><li><ul>Servicios</ul></li></Link>
                    <Link href={'/Contacto'} className={styles.linkR}><li><ul>Contacto</ul></li></Link>
                </div>
            </div>
        </div>
    )
}

export default NadInterno