"use client";
import { services } from "@/Data/Data";
import NadInterno from "@/app/Components/NadvarInterno/NadInterno";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import styles from "./detail.module.css";
const Servicio = ({ params }) => {
  const [data, setData] = useState({});
  useEffect(() => {
    const { Detail } = params;
    const name = decodeURIComponent(Detail);
    const info = services.find((e) => e.nombre === name);
    setData(info);
  }, [params]);
  return (
    <div>
      <NadInterno />
      <div>
        <div className={styles.boximg}>
          <Image />
        </div>
        <div>
          <h1>{data.nombre}</h1>
          <p>{data.detail}</p>
        </div>
      </div>
    </div>
  );
};

export default Servicio;
