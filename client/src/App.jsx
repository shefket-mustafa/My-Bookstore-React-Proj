import { Route, Routes } from "react-router"
import About from "./components/about/About"
import Catalog from "./components/catalog/Catalog"
import Contact from "./components/contact/Contact"
// import Exchange from "./components/exchange/Exchange"
import Footer from "./components/footer/Footer"
import Header from "./components/header/Header"

import Home from "./components/home/Home"
import ErrorPage from "./components/error-page/ErrorPage"
import Sell from "./components/sell/Sell"
import Login from "./components/login/Login"
import Register from "./components/register/Register"
import UserProvider from "./provider-and-context/UserProvider"
import UserGuard from "./components/guards/user-guard/UserGuard"
import GuestGuard from "./components/guards/guest-guard/GuestGuard"




function App() {
  

  return (
    <>

<UserProvider>

<Header />

<Routes>

<Route path="/" element={<Home />} />
<Route path="/about" element={<About />} />
<Route path="/books/catalog" element={<Catalog />} />
<Route path="/contact" element={<Contact />} />

<Route element={<UserGuard />}>
    <Route path="/books/sell" element={<Sell />} />
    <Route path="/books/details" element={<Sell />} />
    <Route path="/books/edit" element={<Sell />} />
</Route>
    

<Route element={<GuestGuard />}>
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
</Route>

{/* <Route path="/books/exchange" element={<Exchange />} /> */}

<Route path="*" element={<ErrorPage />} />

    </Routes>
    </UserProvider>
    <Footer />


    </>
  )
}

export default App
