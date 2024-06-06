import React from "react";
import styles from "./RegionItem.module.scss";
import InfoLineSvg from "../../svg/InfoLineSvg";
import PropTypes from "prop-types";
const DEFAULTTAGS = ["Geysers", "Waterfalls", "Crater lakes"];

const RegionInfo = ({ title, tags, desc }) => {
  return (
    <div className={styles.regionInfoContainer}>
      <div className={styles.sideLine}>
        <InfoLineSvg />
      </div>

      <div className={styles.regionInfo}>
        <h3>{title || "Golden Circle Region"}</h3>
        <div className={styles.tags}>
          {tags
            ? tags.map((tag) => <span key={tag}>{tag}</span>)
            : DEFAULTTAGS.map((tag) => <span key={tag}>{tag}</span>)}
        </div>
        <p className={styles.description}>
          {desc ||
            "The Golden Circle in Iceland is a renowned tourist route that encompasses an array of stunning natural landmarks within a relatively short distance from Reykjavík. This scenic loop includes three primary attractions: Þingvellir National Park, where you can explore the rift valley created by the diverging North American and Eurasian tectonic plates and witness the site of Iceland's ancient parliament."}
        </p>
      </div>
    </div>
  );
};

//prop validation

RegionInfo.propTypes = {
  title: PropTypes.string,
  tags: PropTypes.array,
};

export default RegionInfo;
