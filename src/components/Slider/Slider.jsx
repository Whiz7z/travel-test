// import { useEffect, useRef, useState } from "react";
// import styles from "./Slider.module.scss";

// import PropTypes from "prop-types";
// import SliderItem from "../SliderItem/SliderItem";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, A11y } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/scrollbar";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
// import NextBtn from "./NextBtn";
// import PrevBtn from "./PrevBtn";
// import "../Slider/SwiperCustom.css";

// const Slider = ({ items, isHotel }) => {
//   const [isBeginning, setIsBeginning] = useState(true);
//   const [isEnd, setIsEnd] = useState(false);
//   const swiperRef = useRef(null);
//   const swiperRefTablet = useRef(null);
//   const swiperRefMobile = useRef(null);

//   const onSwiper = (swiper) => {
//     setIsBeginning(swiper.isBeginning);
//     setIsEnd(swiper.isEnd);
//   };

//   const onSlideChange = (swiper) => {
//     setIsBeginning(swiper.isBeginning);
//     setIsEnd(swiper.isEnd);
//   };

//   const updateNavigationStates = (swiper) => {
//     setIsBeginning(swiper.isBeginning);
//     setIsEnd(swiper.isEnd);
//   };

//    useEffect(() => {
//      if (swiperRefTablet.current) {
//        updateNavigationStates(swiperRefTablet.current.swiper);
//      }
//    }, [items]);

//    useEffect(() => {
//      if (swiperRefMobile.current) {
//        updateNavigationStates(swiperRefMobile.current.swiper);
//      }
//    }, [items]);

//   useEffect(() => {
//     if (swiperRef.current) {
//       updateNavigationStates(swiperRef.current.swiper);
//     }
//   }, [items]);

//   useEffect(() => {
//     console.log("isend", isEnd);
//     console.log("isbeginning", isBeginning);
//   }, [isEnd, isBeginning]);
//   return (
//     <>
//       <div
//         className={`${styles.sliderContainer} ${styles.sliderContainerDesktop}`}
//       >
//         <Swiper
//           ref={swiperRef}
//           spaceBetween={"40px"}
//           slidesPerView={3}
//           centeredSlides={false}
//           loop={false}
//           onSwiper={onSwiper}
//           onSlideChange={onSlideChange}
//           modules={[Navigation, A11y]}
//           navigation={{
//             nextEl: ".arrowRight",
//             prevEl: ".arrowLeft",
//           }}
//         >
//           {!isBeginning && <PrevBtn className="arrowLeft" />}

//           {items
//             // .toSorted((a, b) => a.id + b.id)
//             .map((item) => (
//               <SwiperSlide key={item.id}>
//                 <SliderItem item={item} isHotel={isHotel} />
//               </SwiperSlide>
//             ))}

//           {!isEnd && <NextBtn className="arrowRight" />}
//         </Swiper>
//       </div>

//       <div
//         className={`${styles.sliderContainer} ${styles.sliderContainerTablet}`}
//       >
//         <style>
//           {`.swiper-slide{
//               width: 220px;
//             }`}
//         </style>
//         <Swiper
//           ref={swiperRefTablet}
//           spaceBetween={"20px"}
//           slidesPerView={2}
//           centeredSlides={false}
//           loop={false}
//           onSwiper={onSwiper}
//           onSlideChange={onSlideChange}
//           modules={[Navigation, A11y]}
//           navigation={{
//             nextEl: ".arrowRight",
//             prevEl: ".arrowLeft",
//           }}
//         >
//           {!isBeginning && <PrevBtn />}

//           {items
//             // .toSorted((a, b) => a.id + b.id)
//             .map((item, index) => (
//               <SwiperSlide key={item.id}>
//                 <SliderItem item={item} isHotel={isHotel} />
//               </SwiperSlide>
//             ))}

//           {!isEnd && <NextBtn />}
//         </Swiper>
//       </div>

//       <div
//         className={`${styles.sliderContainer} ${styles.sliderContainerMobile}`}
//       >
//         <Swiper
//           ref={swiperRefMobile}
//           spaceBetween={"20px"}
//           slidesPerView={1}
//           centeredSlides={false}
//           loop={false}
//           onSwiper={onSwiper}
//           onSlideChange={onSlideChange}
//           modules={[Navigation, A11y, Pagination]}
//           pagination={{
//             el: ".swiper-pagination",
//             clickable: true,
//           }}
//           navigation={{
//             nextEl: ".arrowRight",
//             prevEl: ".arrowLeft",
//           }}
//         >
//           {!isBeginning && <PrevBtn />}

//           {items
//             // .toSorted((a, b) => a.id + b.id)
//             .map((item, index) => (
//               <SwiperSlide key={item.id}>
//                 <SliderItem item={item} isHotel={isHotel} />
//               </SwiperSlide>
//             ))}

//           {!isEnd && <NextBtn />}
//           <div className="swiper-pagination"></div>
//         </Swiper>
//       </div>
//     </>
//   );
// };

// Slider.propTypes = {
//   items: PropTypes.array,
//   isHotel: PropTypes.bool,
// };

// export default Slider;



import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/pagination";
import "swiper/css/navigation";
import styles from "./Slider.module.scss";
import SliderItem from "../SliderItem/SliderItem";
import NextBtn from "./NextBtn";
import PrevBtn from "./PrevBtn";
import "./SwiperCustom.css"; // Ensure this file includes your custom CSS

const Slider = ({ items, isHotel }) => {
  const [isBeginningDesktop, setIsBeginningDesktop] = useState(true);
  const [isEndDesktop, setIsEndDesktop] = useState(false);
  const [isBeginningTablet, setIsBeginningTablet] = useState(true);
  const [isEndTablet, setIsEndTablet] = useState(false);
  const [isBeginningMobile, setIsBeginningMobile] = useState(true);
  const [isEndMobile, setIsEndMobile] = useState(false);

  const swiperRefDesktop = useRef(null);
  const swiperRefTablet = useRef(null);
  const swiperRefMobile = useRef(null);

  const updateNavigationStates = (swiper, setIsBeginning, setIsEnd) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  useEffect(() => {
    if (swiperRefDesktop.current) {
      updateNavigationStates(
        swiperRefDesktop.current.swiper,
        setIsBeginningDesktop,
        setIsEndDesktop
      );
    }
    if (swiperRefTablet.current) {
      updateNavigationStates(
        swiperRefTablet.current.swiper,
        setIsBeginningTablet,
        setIsEndTablet
      );
    }
    if (swiperRefMobile.current) {
      updateNavigationStates(
        swiperRefMobile.current.swiper,
        setIsBeginningMobile,
        setIsEndMobile
      );
    }
  }, [items]);

  return (
    <>
      <div
        className={`${styles.sliderContainer} ${styles.sliderContainerDesktop}`}
      >
        <Swiper
          ref={swiperRefDesktop}
          spaceBetween={"40px"}
          slidesPerView={3}
          centeredSlides={false}
          loop={false}
          onSwiper={(swiper) =>
            updateNavigationStates(
              swiper,
              setIsBeginningDesktop,
              setIsEndDesktop
            )
          }
          onSlideChange={(swiper) =>
            updateNavigationStates(
              swiper,
              setIsBeginningDesktop,
              setIsEndDesktop
            )
          }
          modules={[Navigation, A11y]}
          navigation={{
            nextEl: ".arrowRightDesktop",
            prevEl: ".arrowLeftDesktop",
          }}
        >
          {!isBeginningDesktop && <PrevBtn className="arrowLeftDesktop" />}
          {items.map((item) => (
            <SwiperSlide key={item.id}>
              <SliderItem item={item} isHotel={isHotel} />
            </SwiperSlide>
          ))}
          {!isEndDesktop && <NextBtn className="arrowRightDesktop" />}
        </Swiper>
      </div>

      <div
        className={`${styles.sliderContainer} ${styles.sliderContainerTablet}`}
      >
        <style>{`.swiper-slide{ width: 220px; }`}</style>
        <Swiper
          ref={swiperRefTablet}
          spaceBetween={"20px"}
          slidesPerView={2}
          centeredSlides={false}
          loop={false}
          onSwiper={(swiper) =>
            updateNavigationStates(swiper, setIsBeginningTablet, setIsEndTablet)
          }
          onSlideChange={(swiper) =>
            updateNavigationStates(swiper, setIsBeginningTablet, setIsEndTablet)
          }
          modules={[Navigation, A11y]}
          navigation={{
            nextEl: ".arrowRightTablet",
            prevEl: ".arrowLeftTablet",
          }}
        >
          {!isBeginningTablet && <PrevBtn className="arrowLeftTablet" />}
          {items.map((item) => (
            <SwiperSlide key={item.id}>
              <SliderItem item={item} isHotel={isHotel} />
            </SwiperSlide>
          ))}
          {!isEndTablet && <NextBtn className="arrowRightTablet" />}
        </Swiper>
      </div>

      <div
        className={`${styles.sliderContainer} ${styles.sliderContainerMobile}`}
      >
        <Swiper
          ref={swiperRefMobile}
          spaceBetween={"20px"}
          slidesPerView={1}
          centeredSlides={false}
          loop={false}
          onSwiper={(swiper) =>
            updateNavigationStates(swiper, setIsBeginningMobile, setIsEndMobile)
          }
          onSlideChange={(swiper) =>
            updateNavigationStates(swiper, setIsBeginningMobile, setIsEndMobile)
          }
          modules={[Navigation, A11y, Pagination]}
          pagination={{
            el: ".swiper-pagination",
            clickable: true,
          }}
          navigation={{
            nextEl: ".arrowRightMobile",
            prevEl: ".arrowLeftMobile",
          }}
        >
          {!isBeginningMobile && <PrevBtn className="arrowLeftMobile" />}
          {items.map((item) => (
            <SwiperSlide key={item.id}>
              <SliderItem item={item} isHotel={isHotel} />
            </SwiperSlide>
          ))}
          {!isEndMobile && <NextBtn className="arrowRightMobile" />}
          <div className="swiper-pagination"></div>
        </Swiper>
      </div>
    </>
  );
};

Slider.propTypes = {
  items: PropTypes.array,
  isHotel: PropTypes.bool,
};

export default Slider;
