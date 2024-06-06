import React from 'react'
import styles from './SliderItem.module.scss'
import PropTypes from 'prop-types'
import ItemWishListSvg from '../../svg/ItemWishListSvg'
import RatingSvg from '../../svg/RatingSvg'

const SliderItem = ({item, isHotel}) => {
  return (
    <div className={styles.sliderItemContainer}>
      <div className={styles.imgContainer}>
        {item.curatorsPick && (
          <div className={styles.curatorsPick}>{"Curator's"} pick</div>
        )}
        <div className={styles.wishContainer}>
          <ItemWishListSvg />
        </div>
        <img src={item.img} alt="photo" />
      </div>
      <h4>{item.title}</h4>
      {isHotel && <span className={styles.rating}><RatingSvg/>{item.rating}</span>}
      <p>{item.desc}</p>
    </div>
  );
}

SliderItem.propTypes = {
  item: PropTypes.object
}

export default SliderItem
