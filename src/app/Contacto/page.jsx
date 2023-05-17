import React from 'react'
import styles from './Contacto.module.css'
import NadInterno from '../Components/NadvarInterno/NadInterno'
import Footer from '../Components/Footer/Footer'
import Image from 'next/image'
import img from '../../../public/Assets/Audit.jpg'
import instg from '../../../public/Assets/insta.png'
import wsp from '../../../public/Assets/wsp.png'
import fb from '../../../public/Assets/fb.png'
import Link from 'next/link'


const Contacto = () => {
  return (
    <div className={styles.container}>
      <NadInterno />
      <div className={styles.data}>
        <div className={styles.boximg}>
          <Image src={img} className={styles.img} alt={img} />
        </div>
        <div className={styles.boxform}>
          <div className={styles.card}>
            <span className={styles.title}>Contactanos</span>
            <form className={styles.form}>
              <div className={styles.group}>
                <input placeholder="" type="text" required="campo obligatorio" />
                <label >Name</label>
              </div>
              <div className={styles.group}>
                <input placeholder="" type="text" required="campo obligatorio" />
                <label >Empresa</label>
              </div>
              <div className={styles.group}>
                <input placeholder="" type="text" required="campo obligatorio" />
                <label >Telefono</label>
              </div>
              <div className={styles.group}>
                <input placeholder="" type="email" id="email" name="email" required="campo obligatorio" />
                <label >Email</label>
              </div>
              <div className={styles.group}>
                <textarea placeholder="" id="comment" name="comment" rows="5" required="campo obligatorio"></textarea>
                <label >Comment</label>
              </div>
              <div className={styles.button}>

                <button type="submit">Submit</button>
              </div>
            </form>
          </div>
          <div className={styles.redes}>
            <div className={styles.boxicon}>

              <Link href='https://www.instagram.com/' className={styles.ruta}><Image src={instg} className={styles.icon} /></Link>
              <Link href='https://web.whatsapp.com/' className={styles.ruta}><Image src={wsp} className={styles.icon} /></Link>
              <Link href='https://es-la.facebook.com/'className={styles.ruta}><Image src={fb} className={styles.icon} /></Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Contacto