import styles from "./City.module.css";
import {useParams,useSearchParams} from 'react-router-dom'

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
    weekday: "long",
  }).format(new Date(date));

function City() {
  const [searchParams, setSearchParams] = useSearchParams();
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");
  const {id} = useParams()
  // TEMP DATA
  const currentCity = {
    cityName: "Lisbon",
    emoji: "🇵🇹",
    date: "2027-10-31T15:59:59.138Z",
    notes: "My favorite city so far!",
  };

  const { cityName, emoji, date, notes,position } = currentCity;

  return (
    <div>

   <h1>City{id}</h1>
   <h2>Position: {lat}, {lng}</h2>
    </div>
  );
}

export default City;
