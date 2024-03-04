import { useState, useEffect } from "react"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Product from "./pages/Product"
import Homepage from "./pages/Homepage"
import Pricing from "./pages/Pricing"
import PageNoteFound from "./pages/PageNoteFound"
import AppLayout from "./pages/AppLayout"
import Login from "./pages/Login"
import CityList from "./components/CityList"
import CountryList from "./components/CountryList"
import City from "./components/City"
import Form from "./components/Form"


const BASE_URL = 'http://localhost:9000'

function App() {
  const [cities, setCities] = useState([])
  const [isLoading, setIsLoading] = useState(false)
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
  return <BrowserRouter>
    <Routes>
      <Route index element={<Homepage />} />
      <Route path="product" element={<Product />} />
      <Route path="pricing" element={<Pricing />} />
      <Route path="login" element={<Login />} />
      <Route path="app" element={<AppLayout />} >
        <Route index element={<Navigate replace to="cities"/>} />
        <Route path="cities" element={<CityList cities={cities} isLoading={isLoading} />} />
        <Route path="cities/:id" element={<City />} />
        <Route path="countries" element={<CountryList cities={cities} isLoading={isLoading} />} />
        <Route path="form" element={<Form />} />
      </Route>
      <Route path="*" element={<PageNoteFound />} />
    </Routes>
  </BrowserRouter>
}

export default App
