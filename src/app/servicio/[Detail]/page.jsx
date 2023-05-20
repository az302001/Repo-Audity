"use client";
import { services } from "@/Data/Data";
import NadInterno from "@/app/Components/NadvarInterno/NadInterno";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import styles from "./detail.module.css";
import Footer from "@/app/Components/Footer/Footer";
import Link from "next/link";
const Servicio = ({ params }) => {
  const [data, setData] = useState({});
  useEffect(() => {
    const { Detail } = params;
    const name = decodeURIComponent(Detail);
    const info = services.find((e) => e.nombre === name);
    setData(info);
  }, [params]);
  return (
    <div className={styles.container}>
      <NadInterno />
      <div className={styles.content}>
        <div className={styles.boximg}>
          <Image src={data.imagen} className={styles.img} alt={data.imagen}/>
        </div>
        <div className={styles.boxdata}>
          <h1>Servicio de {data.nombre}</h1>
          <p>{data.detail}</p>
          <div className={styles.boxButton}>
            <Link href={`https://api.whatsapp.com/send?phone=952167090&text=Hola,%20me%20gustaría%20adquirir%20su%20servicio%20de%20${data.nombre}`}target="_blank" className={styles.button}>
              <span className={styles.text}>¡Contáctame en WhatsApp!</span>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Servicio;
