import Map from "../components/Map"
import Sidebar from "../components/Sidebar"
import styles from './AppLayout.module.css'


function AppLayout() {
  return (
    <div className={styles.app}>
      <Sidebar />
      <Map />
      <div>AppLayout</div>
    </div>
  )
}

export default AppLayout