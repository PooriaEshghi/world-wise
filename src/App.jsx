import { BrowserRouter, Routes, Route } from "react-router-dom"
import Product from "./pages/Product"
import Homepage from "./pages/Homepage"
import Pricing from "./pages/Pricing"
import PageNoteFound from "./pages/PageNoteFound"
import AppLayout from "./pages/AppLayout"
import Login from "./pages/Login"



function App() {
  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="product" element={<Product />} />
      <Route path="priceing" element={<Pricing />} />
      <Route path="login" element={<Login />} />
      <Route path="app" element={<AppLayout />} />
      <Route path="*" element={<PageNoteFound />} />
    </Routes>
  </BrowserRouter>
}

export default App
