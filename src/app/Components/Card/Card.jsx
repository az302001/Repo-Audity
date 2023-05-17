import React from "react";
import Image from "next/image";
import styles from "./Card.module.css";
import Link from "next/link";

const Card = ({ nombre, detalle }) => {
  // const urlNombre = nombre.replace(/\s+/g, '_');
  return (
    <div className={styles.container}>
      <div className={styles.data}>
        <h1>{nombre}</h1>
        <p>{detalle}</p>
      </div>
      <Link href={`/servicio/${nombre}`} className={styles.button}>
        Mas informacion
      </Link>
    </div>
  );
};

export default Card;
