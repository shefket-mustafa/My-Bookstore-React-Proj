import { Route, Routes } from "react-router"
import About from "./components/about/About"
import Catalog from "./components/catalog/Catalog"
import Contact from "./components/contact/Contact"
import Exchange from "./components/exchange/Exchange"
import Footer from "./components/footer/Footer"
import Header from "./components/header/Header"

import Home from "./components/home/Home"
import ErrorPage from "./components/error-page/ErrorPage"
import Sell from "./components/sell/Sell"
import Login from "./components/login/Login"
import Register from "./components/register/Register"




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
<Route path="/books/sell" element={<Sell />} />
<Route path="/login" element={<Login />} />
<Route path="/register" element={<Register />} />


<Route path="*" element={<ErrorPage />} />

    </Routes>
    <Footer />


    </>
  )
}

export default App
