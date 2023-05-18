import Image from 'next/image'
import styles from './page.module.css'
import img from '../../public/Assets/auditoria 03.jpg'
import Nadvar from './Components/NadvarExterno/Nadvar'


export default function Home() {
  return (
    <div className={styles.contenedor}>
      <Nadvar />
      <div className={styles.content}>
        <div className={styles.img}>
          <Image src={img} className={styles.imagen} alt={img}/>
        </div>
        <div className={styles.title}>
          <span>
            <h1>Auditory </h1>
            <p>
              Somos una firma presente en el mercado internacional desde 1987, pionera en el área del buen gobierno, aseguramiento, gestión de riesgos, calidad y seguridad en sistemas de la información (TI).
              Acompañando la evolución de las técnicas de gestión de la información y el conocimiento, el control interno y los riesgos, brindamos soluciones de software, capacitación y consultoría para:
              Implantación de las mejores prácticas para la gestión y el buen gobierno de la TI en base a normas internacionales generalmente aceptadas: COBIT, ISO 27000, ITIL, CMMI, otras.
              La implantación de modernas prácticas para el control interno y la gestión de los riesgos (COSO, Enterprise Risk Management, riesgo operacional, Basilea II, otros).
            </p>
          </span>
        </div>
      </div>

    </div>

  )
}
