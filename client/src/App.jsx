import { Route, Routes } from "react-router"
import About from "./components/about/About"
// import InfoSection from "../components/above-footer/InfoSection"
import Catalog from "./components/catalog/Catalog"
import Contact from "./components/contact/Contact"
import Exchange from "./components/exchange/Exchange"
import Footer from "./components/footer/Footer"
import Header from "./components/header/Header"

import Home from "./components/home/Home"
// import Testimonial from "../components/testimonial-carousel/Testimonial"



function App() {
  

  return (
    <>

<Header />

<Routes>

<Route path="/" element={<Home />} />
<Route path="/books/catalog" element={<Catalog />} />
<Route path="/about" element={<About />} />
<Route path="/books/exchange" element={<Exchange />} />
<Route path="/contact" element={<Contact />} />

    {/* <Testimonial /> */}

    {/* <InfoSection /> */}

    </Routes>
    <Footer />


    </>
  )
}

export default App
