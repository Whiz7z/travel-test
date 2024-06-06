import React from "react";

import styles from "./RegionItem.module.scss";
import Slider from "../Slider/Slider";
import HotelIconSvg from "../../svg/HotelIconSvg";
import PropTypes from "prop-types";

const RegionHotels = ({hotels}) => {
  return (
    <div className={styles.hotelsContainer}>
      <div className={styles.sideIconHotels}>
        <HotelIconSvg />
      </div>

      <div className={styles.content}>
        <h3 className={styles.highlightsTitle}>{"Where to stay"}</h3>
        <div className={styles.hotels}>
          <Slider items={hotels} isHotel={true} />
        </div>
      </div>
    </div>
  );
};

RegionHotels.propTypes = {
  hotels: PropTypes.array,
};

export default RegionHotels;
