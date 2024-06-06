import React from "react";
import styles from "./Plan.module.scss";

import PropTypes from "prop-types";
import ThreeDots from "../../svg/ThreeDots";
import TwoLinesSvg from "../../svg/TwoLinesSvg";

const PlanItem = ({ plan }) => {
  return (
    <div className={styles.planItemContainer}>
      <div className={styles.imgContainer}>
        <img src={plan.img} alt="" />
      </div>
      <div className={styles.planInfro}>
        <h4>{plan.title}</h4>
        {plan.curatorsPick && <p className={styles.curator}>Curator’s pick</p>}
        <p className={styles.desc}>{plan.desc}</p>
      </div>

      <div className={styles.actions}>
        <TwoLinesSvg />
        <ThreeDots />
      </div>
    </div>
  );
};

PlanItem.propTypes = {
  plan: PropTypes.object,
};
export default PlanItem;
