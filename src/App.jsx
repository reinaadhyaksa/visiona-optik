import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Homepage from "./components/HompePage"
import AboutPage from "./components/AboutPage"
import ProductsPage from "./components/ProductsPage"
import ContactPage from "./components/ContactPage"
import ServicesPage from "./components/ServicePage"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  )
}

export default App
