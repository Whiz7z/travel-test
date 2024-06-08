import React from "react";
import styles from "./RegionItem.module.scss";
import InfoLineSvg from "../../svg/InfoLineSvg";
import PropTypes from "prop-types";
import BDotSvg from "../../svg/BDotSvg";

const RegionInfo = ({info, isB}) => {
  const { title, tags, description } = info || {};
  return (
    <div className={styles.regionInfoContainer}>
      <div className={styles.sideLine}>
        {isB ? <BDotSvg /> : <InfoLineSvg />}
      </div>

      <div className={styles.regionInfo}>
        <h3>{title}</h3>
        <div className={styles.tags}>
          {tags && tags.map((tag) => <span key={tag}>{tag}</span>)}
        </div>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};

//prop validation

RegionInfo.propTypes = {
  info: PropTypes.object,
  isB: PropTypes.bool,
};

export default RegionInfo;
