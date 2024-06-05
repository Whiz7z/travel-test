
import styles from './Header.module.scss'
import Menu from './Menu';

import PhotoGallery from './PhotoGallery';

function Header() {
  return (
    <div className={styles.headerContainer}>
      <Menu/>
      <PhotoGallery/>
    </div>
  )
}

export default Header
