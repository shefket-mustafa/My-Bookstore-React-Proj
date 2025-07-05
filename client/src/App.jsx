import { Route, Routes } from "react-router"
import About from "./components/about/About"
import Catalog from "./components/catalog/Catalog"
import Contact from "./components/contact/Contact"
// import Exchange from "./components/exchange/Exchange"
import Footer from "./components/footer/Footer"
import Header from "./components/header/Header"

import Home from "./components/home/Home"
import ErrorPage from "./components/error-page/ErrorPage"
import Sell from "./components/sell/Sell.jsx"
import Login from "./components/login/Login.jsx"
import Register from "./components/register/Register"
import UserGuard from "./components/guards/user-guard/UserGuard"
import GuestGuard from "./components/guards/guest-guard/GuestGuard"
import Details from "./components/details/Details"
import Edit from "./components/edit/Edit"
import ManageScrollPosition from "./components/manage-scroll-position/ManageScrollPosition"
import AuthProvider from "./provider-and-context/AuthProvider"
import BookProvider from "./provider-and-context/BooksProvider"
import ErrorModal from "./components/error-modal/ErrorModal.jsx"
import SuccessModal from "./components/error-modal/success-modal/SuccessModal.jsx"
import { PopUpProvider } from "./provider-and-context/PopUpProvider.jsx"
import { usePopUpContext } from "./provider-and-context/PopUpContext.jsx"
import Modals from "./components/modals/Modals.jsx"




function App() {
  

  const {error, successMessage} = usePopUpContext()
  
  
  return (
    <>
    <PopUpProvider>
<AuthProvider>
  <BookProvider>
    <Modals />
<Header />
<ManageScrollPosition />

<Routes>

<Route path="/" element={<Home />} />
<Route path="/about" element={<About />} />
<Route path="/books/catalog" element={<Catalog />} />
<Route path="/contact" element={<Contact />} />
<Route path="/books/:bookId" element={<Details />} />
<Route path="/books/details/:bookId" element={<Details />} />

<Route element={<UserGuard />}>
    <Route path="/books/sell" element={<Sell />} />
    <Route path="/books/edit/:bookId" element={<Edit />} />
</Route>
    

<Route element={<GuestGuard />}>
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
</Route>

{/* <Route path="/books/exchange" element={<Exchange />} /> */}

<Route path="*" element={<ErrorPage />} />

    </Routes>
    </BookProvider>
    </AuthProvider>
    </PopUpProvider>
    <Footer />


    </>
  )
}

export default App
