import React from "react";
import styles from "./TripInfo.module.scss";

import profileImg from "../../assets/profile/tania.png";
import WishListSvg from "../../svg/WishListSvg";
import ShareSvg from "../../svg/ShareSvg";
const TripInfo = () => {
  return (
    <div className={styles.tripInfoContainer}>
      <div className={styles.tripInfoTop}>
        <div className={styles.infoItem}>
          <p>Trip duration</p>
          <p>7 days</p>
        </div>
        <div className={styles.infoItem}>
          <p>Exploration</p>
          <p>4 regions</p>
        </div>
        <div className={styles.infoItem}>
          <p>Flight</p>
          <p>7h 20m from SFO</p>
        </div>

        <a href={"#"} className={styles.viewItineraryLink}>
          View itinerary
        </a>
      </div>

      <div className={styles.tripInfoMain}>
        <div className={styles.infoHeader}>
          <h1>{"Iceland's"} Highlights</h1>
          <div className={styles.actions}>
            <button className={styles.wishListBtn}>
              {" "}
              <WishListSvg /> Add to wishlish
            </button>
            <button className={styles.share}>
              <ShareSvg /> Share
            </button>
          </div>
        </div>

        <div className={styles.infoContent}>
          <div className={styles.expert}>
            <div className={styles.profileImg}>
              <img src={profileImg} alt="expert" />
            </div>

            <div className={styles.expertInfo}>
              <h3>Curated by Sandra</h3>
              <p>Fyno expert</p>
            </div>
          </div>

          <p className={styles.paragraph}>
            Welcome to Iceland, a land of breathtaking landscapes and unspoiled
            natural beauty. From its majestic waterfalls and geothermal wonders
            to the vibrant culture and rich history, Iceland promises an
            unforgettable adventure for every traveler.
          </p>
        </div>
      </div>

      <div className={styles.itinerary}></div>
    </div>
  );
};

export default TripInfo;
