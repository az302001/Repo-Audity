import React from "react";
import Card from "../Card/Card";
import styles from "./Cards.module.css";

const Cards = ({ c }) => {
  return (
    <div className={styles.container}>
      {c.map((e, i) => {
        return <Card key={i} nombre={e.nombre} detalle={e.detail} />;
      })}
    </div>
  );
};

export default Cards;
