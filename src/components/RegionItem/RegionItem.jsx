import React from 'react'
import styles from './RegionItem.module.scss'
import RegionInfo from './RegionInfo'
import RegionHighlights from './RegionHighlights'
const RegionItem = () => {
  return (
    <div className={styles.region}>
      <RegionInfo />
      <RegionHighlights/>
    </div>
  )
}

export default RegionItem
