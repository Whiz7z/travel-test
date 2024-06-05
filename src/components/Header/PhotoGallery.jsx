import React from "react";

import northlightImg from "../../assets/gallery/northlight.png";
import waterfallImg from "../../assets/gallery/waterfall.png";
import riverImg from "../../assets/gallery/river.png";
import housesImg from "../../assets/gallery/houses.png";
import caveImg from "../../assets/gallery/cave.png";

import dotsImg from "../../assets/ui/dots.png";

import styles from "./Header.module.scss";
import Dots from "../../svg/Dots";

function PhotoGallery() {
  return (
    <div className={styles.galleryContainer}>
      <div className={styles.northlight}>
        <img src={northlightImg} alt="northlightImg" />
      </div>
      <div className={styles.waterfall}>
        <img src={waterfallImg} alt="waterfallImg" />
      </div>
      <div className={styles.river}>
        <img src={riverImg} alt="riverImg" />
      </div>
      <div className={styles.houses}>
        <img src={housesImg} alt="housesImg" />
      </div>
      <div className={styles.cave}>
        <img src={caveImg} alt="caveImg" />
      </div>

      <button className={styles.allPhotosBtn}>
        <img src={dotsImg} alt="dotsImg" />
        All photos
      </button>
    </div>
  );
}

export default PhotoGallery;
