import { BrowserRouter,Routes, Route } from "react-router-dom"
import Product from "./pages/Product"
import Homepage from "./pages/Homepage"
import Priceing from "./pages/Priceing"
import PageNoteFound from "./pages/PageNoteFound"



function App() {
  return <BrowserRouter>
  <Routes>
    <Route path="/" element={<Homepage />} />
    <Route path="product" element={<Product />} />
    <Route path="priceing" element={<Priceing />} />
    <Route path="*" element={<PageNoteFound />} />
  </Routes>
  </BrowserRouter>
}

export default App
