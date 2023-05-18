"use client";

import styles from './Contacto.module.css'
import NadInterno from '../Components/NadvarInterno/NadInterno'
import Footer from '../Components/Footer/Footer'
import Image from 'next/image'
import img from '../../../public/Assets/Audit.jpg'
import instg from '../../../public/Assets/insta.png'
import wsp from '../../../public/Assets/wsp.png'
import fb from '../../../public/Assets/fb.png'
import Link from 'next/link'

import { useState } from 'react';
import Loader from '../Components/Loader/Loader';



export default function Contacto() {

 
  const [formulario, setFormulario] = useState({
    nombre: "",
    empresa: "",
    telefono: "",
    correo: "",
    comentario: "",
  });
  const [enviado, setEnviado] = useState(false);
  const [cargando, setCargando] = useState(false);

  const SendForm = async (event) => {
    event.preventDefault();

    setCargando(true);

    const response = await fetch("/api/EnviarCorreo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formulario),
    });

    const data = await response.json();
    if (data.message === "El mensaje se envió correctamente.") {
      setFormulario({
        nombre: "",
        empresa: "",
        telefono: "",
        correo: "",
        comentario: "",
      });
      setEnviado(true);
      setCargando(false);
      alert('El mensaje se envió correctamente');
    } else {
      setEnviado(false);
      setCargando(false);
      alert('Ocurrió un error al enviar el mensaje');
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormulario((prevFormulario) => ({
      ...prevFormulario,
      [name]: value,
    }));
  };


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
            <form className={styles.form} onSubmit={SendForm}>
              <div className={styles.group}>
                <input placeholder="" type="text" required="campo obligatorio" value={formulario.nombre} onChange={handleChange} name='nombre'/>
                <label >Nombre</label>
              </div>
              <div className={styles.group}>
                <input placeholder="" type="text" required="campo obligatorio" value={formulario.empresa} onChange={handleChange} name='empresa'/>
                <label >Empresa</label>
              </div>
              <div className={styles.group}>
                <input placeholder="" type="text" required="campo obligatorio" value={formulario.telefono} onChange={handleChange} name='telefono'/>
                <label >Telefono</label>
              </div>
              <div className={styles.group}>
                <input placeholder="" type="email" id="email" name="email" required="campo obligatorio" value={formulario.correo} onChange={handleChange} name='correo'/>
                <label >Email</label>
              </div>
              <div className={styles.group}>
                <textarea placeholder="" id="comment" name="comentario" rows="5" required="campo obligatorio" value={formulario.comentario} onChange={handleChange}  ></textarea>
                <label >Comentario</label>
              </div>
              <div className={styles.button}>
                <button type="submit">Submit</button>
              </div>
            </form>
            {
              cargando && <div><Loader/></div>
            }
          </div>
          <div className={styles.redes}>
            <div className={styles.boxicon}>

              <Link href='https://www.instagram.com/' className={styles.ruta}><Image src={instg} className={styles.icon} alt={instg} /></Link>
              <Link href='https://web.whatsapp.com/' className={styles.ruta}><Image src={wsp} className={styles.icon} alt={wsp} /></Link>
              <Link href='https://es-la.facebook.com/' className={styles.ruta}><Image src={fb} className={styles.icon} alt={fb} /></Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

