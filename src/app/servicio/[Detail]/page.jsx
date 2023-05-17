'use client';
import { services } from '@/Data/Data'
import NadInterno from '@/app/Components/NadvarInterno/NadInterno'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import styles from './detail.module.css'
// import { useRouter } from 'next/router';
import { useRouter } from "next/navigation"

const Servicio = () => {
  const [data, setData] = useState({})
  const router = useRouter()
  console.log(data)

  useEffect(() => {
   
  console.log(router.query)

    const info = services.find((e) => e.nombre === "Detail")
    setData(info)
  }, [])
  console.log(router.query)
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
  )
}
export async function getServerSideProps(context) {
  const { Detail } = context.query
  console.log(Detail)

  console.log(services)
  const data = services.find((e) => e.nombre === Detail)
 
  return { props: { data } }

}


export default Servicio  