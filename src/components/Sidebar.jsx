import Logo from './Logo'
import styles from './Sidebar.module.css'
import AppNav from './AppNav'
function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />
      <p>List Of Cities</p>
      <footer className={styles.footer}>
        <p className={styles.copyright}>
          &copy; Copyright {new Date().getFullYear()} by WorldWise Inc
        </p>
      </footer>
      </div>
  )
}

export default Sidebar