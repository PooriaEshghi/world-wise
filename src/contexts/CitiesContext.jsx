import { createContext, useEffect, useState, useContext } from "react";
const BASE_URL = 'http://localhost:9000'

const CitiesContext = createContext();


function CitiesProvider({children}) {
  const [cities, setCities] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [currentCity, setCurrentCity] = useState({})

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true)
        const res = await fetch(`${BASE_URL}/cities`)
        const data = await res.json()
        setCities(data)

      } catch (error) {
        alert(error)
      } finally {
        setIsLoading(false)
      }

    }
    fetchData();
  }, [])

  async function getCity(){
    try {
      setIsLoading(true)
      const res = await fetch(`${BASE_URL}/cities`)
      const data = await res.json()
      setCurrentCity(data)

    } catch (error) {
      alert(error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <CitiesContext.Provider
    value={
      {
        cities,
        isLoading,
        currentCity,
        getCity
      }
    }>
      {children}
    </CitiesContext.Provider>
  )
}
export function useCities(){
  const context = useContext(CitiesContext);
  if(context === undefined) throw new Error('CitiesContext was used out of CitiesProvider')
  return context
}

export default CitiesProvider