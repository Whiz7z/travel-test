import React from "react";
import styles from "./Plan.module.scss";

import PropTypes from "prop-types";
import ThreeDots from "../../svg/ThreeDots";
import PlanItem from "./PlanItem";
import TimeSvg from "../../svg/TimeSvg";

const Plan = ({ plan }) => {
  return (
    <div className={styles.plansContainer}>
      {plan.map((planItem, index) => (
        <div className={styles.plan} key={index}>
          <div className={styles.planDayTop}>
            <h3>{planItem.day}</h3>
            <span className={styles.actions}>
              <p className={styles.time}>
                <TimeSvg />
                {planItem.time}
              </p>

              <ThreeDots />
            </span>
          </div>
          <div className={styles.planItems}>
            {planItem.plan.map((planItem, index) => (
              <PlanItem plan={planItem} key={index} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

Plan.propTypes = {
  plan: PropTypes.array,
};

export default Plan;
