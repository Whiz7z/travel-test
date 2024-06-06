import React from 'react'
import styles from './RegionItem.module.scss'
import RegionInfo from './RegionInfo'
import RegionHighlights from './RegionHighlights'
import RegionHotels from './RegionHotels'
const RegionItem = ({highlights, hotels, info, plan}) => {
  return (
    <div className={styles.region}>
      <RegionInfo info={info} />
      <RegionHighlights  highlights={highlights} plan={plan} />
      {/* <RegionHotels  hotels={hotels}/> */}
    </div>
  )
}

export default RegionItem
