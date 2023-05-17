"use client";

import NadInterno from "../Components/NadvarInterno/NadInterno";
import styles from "./Servicios.module.css";
import Footer from "../Components/Footer/Footer";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { services } from "@/Data/Data";

import img1 from "../../../public/Assets/auditoria.jpg";
import img2 from "../../../public/Assets/audi04.jpg";
import img3 from "../../../public/Assets/audi05.jpg";
import img4 from "../../../public/Assets/audi06.jpg";
import img5 from "../../../public/Assets/audi07.jpg";

// import "./styles.css";

// import required modules
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper";
import Cards from "../Components/CARDS/Cards";
import Image from "next/image";

const Page = () => {
  return (
    <div>
      <NadInterno />
      <div className={styles.data}>
        <div className={styles.carousel}>
          <Swiper
            spaceBetween={30}
            effect={"fade"}
            navigation={true}
            pagination={{
              clickable: true,
            }}
            modules={[EffectFade, Navigation, Pagination, Autoplay]}
            className={styles.mySwiper}
            autoplay={{
              delay: 2500, //
              disableOnInteraction: false,
            }}
            loop={true}
          >
            <SwiperSlide>
              <Image src={img1} className={styles.img} />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={img2} className={styles.img} />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={img3} className={styles.img} />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={img4} className={styles.img} />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={img5} className={styles.img} />
            </SwiperSlide>
          </Swiper>
        </div>

        <div className={styles.services}>
          <Cards c={services} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Page;
