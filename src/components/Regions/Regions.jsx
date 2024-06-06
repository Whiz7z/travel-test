import React from 'react'
import styles from './Regions.module.scss'
import RegionItem from '../RegionItem/RegionItem';

const Regions = () => {
  return <div className={styles.regionsContainer}>
    <RegionItem />
  </div>;
}

export default Regions
