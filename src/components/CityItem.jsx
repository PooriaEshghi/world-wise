

import { Link } from "react-router-dom";
import styles from "./CityItem.module.css"
// eslint-disable-next-line react/prop-types
const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
    
  }).format(new Date(date));
function CityItem({city}) {
  const{
    
    cityName,date,emoji,id,position} = city;
      return(
  <li >
    <Link className={styles.cityItem} to={`${id}?lat=${position.lat}&lng=${position.lng}`}>
    <span className={styles.emoji}>{emoji}</span>
    <h2 className={styles.name}>{cityName}</h2>
    <time className={styles.date}>({formatDate(date)})</time>
    <button className={styles.deleteButton}>&times;</button>
    </Link>
  </li>)
  
}

export default CityItem