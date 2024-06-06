import React from "react";
import styles from "./RegionItem.module.scss";
import InfoLineSvg from "../../svg/InfoLineSvg";
import HighlightsLineSvg from "../../svg/HighlightsLineSvg";
import ListSvg from "../../svg/ListSvg";
import Slider from "../Slider/Slider";
import { goldenCircleHighlights } from "../../itemsStore/items";
// import HighlightsSvg from '../../svg/HighlightsSvg';

const RegionHighlights = ({ title }) => {
  return (
    <div className={styles.highlightsContainer}>
      <div className={styles.sideLineHighlights}>
        <HighlightsLineSvg star={true} />
      </div>

      <div className={styles.content}>
        <div className={styles.top}>
          <h3 className={styles.highlightsTitle}>
            {title || "Region highlights"}
          </h3>
          <button className={styles.dailyPlanBtn}>
            <ListSvg />
            Show daily plan
          </button>
        </div>
        <div className={styles.highlights}>
          <Slider items={goldenCircleHighlights} />
        </div>
      </div>
    </div>
  );
};

export default RegionHighlights;
