import { BrowserRouter,Routes, Route } from "react-router-dom"
import Product from "./pages/Product"
import Homepage from "./pages/Homepage"
import Priceing from "./pages/Priceing"


function App() {
  return <BrowserRouter>
  <Routes>
    <Route path="product" element={<Product />} />
    <Route path="home" element={<Homepage />} />
    <Route path="priceing" element={<Priceing />} />
  </Routes>
  </BrowserRouter>
}

export default App
