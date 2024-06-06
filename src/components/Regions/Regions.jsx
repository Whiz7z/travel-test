
import styles from "./Regions.module.scss";
import RegionItem from "../RegionItem/RegionItem";

import {
  goldenCircleHighlights,
  goldenCircleHotels,
  golderCircleInfo,
  southHighlandsInfo,
  southHighlandsighlights,
  southHighlandsHotels,
  goldenCirclePlan,
  southHighlandsPlan,
} from "../../itemsStore/items";
const Regions = () => {
  return (
    <div className={styles.regionsContainer}>
      <RegionItem
        highlights={goldenCircleHighlights}
        hotels={goldenCircleHotels}
        info={golderCircleInfo}
        plan={goldenCirclePlan}
      />
      <RegionItem
        highlights={southHighlandsighlights}
        hotels={southHighlandsHotels}
        info={southHighlandsInfo}
        plan={southHighlandsPlan}
      />
    </div>
  );
};

export default Regions;
