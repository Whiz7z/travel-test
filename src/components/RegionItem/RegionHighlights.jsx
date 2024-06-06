import  { useState } from "react";
import styles from "./RegionItem.module.scss";
import HighlightsLineSvg from "../../svg/HighlightsLineSvg";
import ListSvg from "../../svg/ListSvg";
import Slider from "../Slider/Slider";

import PlanSvg from "../../svg/PlanSvg";
import StarsSvg from "../../svg/StarsSvg";
import Plan from "../Plan/Plan";

// import HighlightsSvg from '../../svg/HighlightsSvg';

//proptypes


const RegionHighlights = ({ highlights, plan }) => {
  const [showPlan, setShowPlan] = useState(false);

  const showPlanHandler = (show) => {
    setShowPlan(show);
  };
  return (
    <div className={styles.highlightsContainer}>
      <div className={styles.sideLineHighlights}>
        {showPlan ? <PlanSvg /> : <HighlightsLineSvg star={true} />}
        {/* <HighlightsLineSvg star={true} />
        <PlanSvg /> */}
      </div>

      <div className={styles.content}>
        <div className={styles.top}>
          <h3 className={styles.highlightsTitle}>{"Region highlights"}</h3>
          <button
            className={styles.dailyPlanBtn}
            onClick={() => showPlanHandler(showPlan ? false : true)}
          >
            {showPlan ? (
              <>
                <StarsSvg /> Show daily plan
              </>
            ) : (
              <>
                <ListSvg />
                Show daily plan
              </>
            )}
          </button>
        </div>
        <div className={styles.highlights}>
          {showPlan ? <Plan plan={plan}/> : <Slider items={highlights} />}
        </div>
      </div>
    </div>
  );
};

RegionHighlights.propTypes = {
  highlights: PropTypes.array,
  plan: PropTypes.object,
};

export default RegionHighlights;
