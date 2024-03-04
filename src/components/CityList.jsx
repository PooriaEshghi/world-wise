import CityItem from './CityItem'
import styles from './CityList.Module.css'
import Message from './Message'
import Spinner from './Spinner'




function CityList({cities, isLoading}) {
  if(isLoading) return <Spinner />
  if(!cities.length) return <Message message="Add your city" />
  return (
    <ul className={styles.cityList}>{
      cities.map((city) => (
        <CityItem city={city} key={city.id} />
      )) 
    }</ul>
  )
}

export default CityList