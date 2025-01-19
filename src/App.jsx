import { BrowserRouter , Route, Routes } from "react-router-dom"
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Shop from "./pages/Shop"
import Contact from "./pages/Contact"
import About from "./pages/About"
import GotoTop from "./components/gotoTop"
import Cart from "./pages/Cart"
import Checkout from "./pages/Checkout"
import OrderConfirmation from "./pages/OrderConfirmation"
import { useState } from "react"
import FilterData from "./pages/FilterData"
import ProductDetail from "./pages/ProductDetail"

function App() {
  const [order,setOrder] = useState(null)
  
  return (
    
    <BrowserRouter>
        <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />        
        <Route path="/Home" element={<Home />} />        
        <Route path="/Shop" element={<Shop />} />        
        <Route path="/product/:id" element={<ProductDetail />} />             
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Checkout" element={<Checkout setOrder={setOrder} />} />
        <Route path="/order-confirmation" element={<OrderConfirmation order={order} />} />
        {/* <Route path="/filter-data" element={<FilterData />} /> */}

      </Routes>
      <GotoTop />
      <Footer />
    
    </BrowserRouter>
  )
}

export default App
