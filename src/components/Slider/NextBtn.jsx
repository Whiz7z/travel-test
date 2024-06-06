import React from 'react'
import SwiperArrow from '../../svg/SwiperArrow'
import { useSwiper } from 'swiper/react';
import styles from "./Slider.module.scss";

const NextBtn = () => {
   const swiper = useSwiper();
  return (
    
          <div
            className={`${styles.arrow} ${styles.arrowRight} arrowRight`}
            onClick={() => swiper.slideNext()}
          >
            <SwiperArrow />
          </div>
  )
}

export default NextBtn
