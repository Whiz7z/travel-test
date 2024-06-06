import  { useEffect, useState } from "react";
import styles from "./Slider.module.scss";

import PropTypes from "prop-types";
import SliderItem from "../SliderItem/SliderItem";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination,  A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/pagination";
import "swiper/css/navigation";
import NextBtn from "./NextBtn";
import PrevBtn from "./PrevBtn";
import '../Slider/SwiperCustom.css'

const Slider = ({ items }) => {
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const onSwiper = (swiper) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  const onSlideChange = (swiper) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  useEffect(() => {
    console.log(isEnd);
  }, [isEnd]);
  return (
    <>
      <div
        className={`${styles.sliderContainer} ${styles.sliderContainerDesktop}`}
      >
        <Swiper
          spaceBetween={"40px"}
          slidesPerView={3}
          centeredSlides={false}
          loop={false}
          onSwiper={onSwiper}
          onSlideChange={onSlideChange}
          modules={[Navigation, A11y]}
          navigation={{
            nextEl: ".arrowRight",
            prevEl: ".arrowLeft",
          }}
        >
          {!isBeginning && <PrevBtn />}

          {items
            // .toSorted((a, b) => a.id + b.id)
            .map((item, index) => (
              <SwiperSlide key={item.id}>
                <SliderItem item={item} isHotel={isHotel} />
              </SwiperSlide>
            ))}

          {!isEnd && <NextBtn />}
        </Swiper>
      </div>

      <div
        className={`${styles.sliderContainer} ${styles.sliderContainerTablet}`}
      >
        <style>
          {`.swiper-slide{
              width: 220px;
            }`}
        </style>
        <Swiper
          spaceBetween={"20px"}
          slidesPerView={2}
          centeredSlides={false}
          loop={false}
          onSwiper={onSwiper}
          onSlideChange={onSlideChange}
          modules={[Navigation, A11y]}
          navigation={{
            nextEl: ".arrowRight",
            prevEl: ".arrowLeft",
          }}
        >
          {!isBeginning && <PrevBtn />}

          {items
            // .toSorted((a, b) => a.id + b.id)
            .map((item, index) => (
              <SwiperSlide key={item.id}>
                <SliderItem item={item} isHotel={isHotel} />
              </SwiperSlide>
            ))}

          {!isEnd && <NextBtn />}
        </Swiper>
      </div>

      <div
        className={`${styles.sliderContainer} ${styles.sliderContainerMobile}`}
      >
        
        <Swiper
          spaceBetween={"20px"}
          slidesPerView={1}
          centeredSlides={false}
          loop={false}
          onSwiper={onSwiper}
          onSlideChange={onSlideChange}
          modules={[Navigation, A11y, Pagination]}
          pagination={{
            el: ".swiper-pagination",
            clickable: true,
          }}
          navigation={{
            nextEl: ".arrowRight",
            prevEl: ".arrowLeft",
          }}
        >
          {!isBeginning && <PrevBtn />}

          {items
            // .toSorted((a, b) => a.id + b.id)
            .map((item, index) => (
              <SwiperSlide key={item.id}>
                <SliderItem item={item} isHotel={isHotel} />
              </SwiperSlide>
            ))}

          {!isEnd && <NextBtn />}
          <div className="swiper-pagination"></div>
        </Swiper>
      </div>
    </>
  );
};

Slider.propTypes = {
  items: PropTypes.array,
};

export default Slider;
