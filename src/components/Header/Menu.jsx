import React, { useState } from "react";
import styles from "./Header.module.scss";
import DropdownArrowSvg from "../../svg/DropdownArrowSvg";
import PlusSvg from "../../svg/PlusSvg";

const Menu = () => {
  const [dropdown, setDropdown] = useState(false);
  const [days, setDays] = useState('7 days');
  const setDaysHandler = (days) => {
    setDays(days);
    setDropdown(false);
  };

  const setDropdownHandler = () => {
    if (!dropdown) {
      setDropdown(true);
    } else {
      setDropdown(false);
    }
  }
  return (
    <div className={styles.menuContainer}>
      <ul>
        <li>
          <a href=""> Trips</a>
        </li>
        <li>
          <a href=""> Iceland</a>
        </li>
        <li className={styles.dropdown} onClick={() => setDropdownHandler()}>
          {days}
          <DropdownArrowSvg />
          {dropdown && (
            <div
              className={styles.dropdownContainer}
              
            >
              <div onClick={() => setDaysHandler('5 days')}>5 days</div>
              <div onClick={() => setDaysHandler('6 days')}>6 days</div>
              <div onClick={() => setDaysHandler('7 days')}>7 days</div>
              <div onClick={() => setDaysHandler('8 days')}>8 days</div>
              <div onClick={() => setDaysHandler('9 days')}>9 days</div>
              <div onClick={() => setDaysHandler('10 days')}>10 days</div>
              
            </div>
          )}
        </li>
      </ul>

      <div className={styles.createBtn}>
        <button style={{ color: "#000000" }}>
          <PlusSvg /> Create
        </button>
      </div>
    </div>
  );
};

export default Menu;
