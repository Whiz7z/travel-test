import React , {useState} from "react";
import styles from "./TripInfo.module.scss";
import DateRangePicker from "rsuite/DateRangePicker";
import './DatePickerCustomStyles.scss';
// (Optional) Import component styles. If you are using Less, import the `index.less` file.
import "rsuite/DateRangePicker/styles/index.css";
import format from "date-fns/format";
import profileImg from "../../assets/profile/tania.png";
import WishListSvg from "../../svg/WishListSvg";
import ShareSvg from "../../svg/ShareSvg";
import PlaneSvg from "../../svg/PlaneSvg";
import DateSvg from "../../svg/DateSvg";
import PersonSvg from "../../svg/PersonSvg";
const TripInfo = () => {
  const [date, setDate] = useState([
    new Date("July 3, 2024"),
    new Date("July 11, 2024")
  ]);

  const [persons, setPersons] = useState(2);
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

      <div className={styles.itinerary}>
        <h2>Iceland itinerary</h2>
        <form action="">
          <div className={styles.flightInputs}>
            <input type="text" value={"Reykjavík, KEF"} />
            <PlaneSvg />
            <input type="text" value={"San Francisco, SFO"} />
          </div>

          <div className={styles.otherInputs}>
            <div className={styles.dates}>
              <DateSvg />
              {/* <input type="date" /> */}
              <DateRangePicker
                editable={false}
                defaultCalendarValue={date}
                defaultValue={date}
                // placeholder={
                //   format(new Date("July 3, 2024"), "MMM dd") +
                //   " - " +
                //   format(new Date("July 11, 2024"), "MMM dd")
                // }

                //value={date[0] + " - " + date[1]}

                renderValue={([start, end]) => {
                  return (
                    format(start, "MMM dd") + " - " + format(end, "MMM dd")
                  );
                }}
              />
            </div>

            <div className={styles.persons}>
              <PersonSvg />
              <input
                type="number"
                min={1}
                max={30}
                value={persons}
                onChange={(e) => { setPersons(e.target.value) }}
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TripInfo;
