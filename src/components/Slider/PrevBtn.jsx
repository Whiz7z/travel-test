import React from "react";
import SwiperArrow from "../../svg/SwiperArrow";
import { useSwiper } from "swiper/react";
import styles from "./Slider.module.scss";

const PrevBtn = () => {
  const swiper = useSwiper();
  return (
    <div
      className={`${styles.arrow} ${styles.arrowLeft} arrowLeft`}
      onClick={() => swiper.slidePrev()}
    >
      <SwiperArrow />
    </div>
  );
};

export default PrevBtn;
