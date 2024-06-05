import React from "react";
import styles from "./Header.module.scss";
import DropdownArrowSvg from "../../svg/DropdownArrowSvg";
import PlusSvg from "../../svg/PlusSvg";

const Menu = () => {
  return (
    <div className={styles.menuContainer}>
      <ul>
          <li>
            <a href=""> Trips</a>
          </li>
          <li>
            <a href=""> Iceland</a>
          </li>
          <li className={styles.dropdown}>
            7 days 
            <DropdownArrowSvg/>
          </li>
      </ul>

      <div className={styles.createBtn}>
        <button><PlusSvg/> Create</button>
      </div>
    </div>
  );
};

export default Menu;
