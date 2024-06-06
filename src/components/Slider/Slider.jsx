import React, { useEffect, useState } from "react";
import styles from "./Slider.module.scss";

import PropTypes from "prop-types";
import SliderItem from "../SliderItem/SliderItem";
import SwiperArrow from "../../svg/SwiperArrow";

import { useSwiper } from "swiper/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";

import "swiper/css/navigation";
import NextBtn from "./NextBtn";
import PrevBtn from "./PrevBtn";

const Slider = ({ items }) => {
  const [isEnd, setIsEnd] = useState("start");


  useEffect(() => {
    console.log(isEnd)
  }, [isEnd]);
  return (
    <div className={styles.sliderContainer}>
      <Swiper
        spaceBetween={"40px"}
        slidesPerView={3}
        centeredSlides={false}
        loop={false}
        modules={[Navigation, A11y]}
        navigation={{
          nextEl: ".arrowRight",
          prevEl: ".arrowLeft",
        }}
      >
        <PrevBtn />

        {items
          .toSorted((a, b) => a.id + b.id)
          .map((item, index) => (
            <SwiperSlide key={item.id}>
              <SliderItem item={item} />
            </SwiperSlide>
          ))}
        <NextBtn />
      </Swiper>
    </div>
  );
};

Slider.propTypes = {
  items: PropTypes.array,
};

export default Slider;
