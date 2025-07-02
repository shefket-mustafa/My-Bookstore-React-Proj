import { useEffect, useState } from "react";
import { UserContext } from "./UserContext";
import ErrorModal from "../components/error-modal/ErrorModal";
import { useDeleteBook, useEditBook, useGetBook } from "../utils/utils-book-API/bookApi.js";
import { useNavigate } from "react-router";
import { setNavigate } from "../utils/requester";
import SuccessModal from "../components/error-modal/success-modal/SuccessModal.jsx";

    export default function UserProvider({children}) {

      const navigate = useNavigate();
      const [userData, setUserData] = useState({});
      const [bookDetails, setBookDetails] = useState({});
      const [error, setError] = useState('');
      const [successMessage, setSuccessMessage] = useState('');

      const {getBook} = useGetBook();
      const {editBook} = useEditBook();
      const {deleteBook} = useDeleteBook();
      

      
      useEffect(()=>{
        const storedAuth = JSON.parse(localStorage.getItem('auth'));
        if(storedAuth?.accessToken){
          setUserData(storedAuth)
        }
      },[])

      useEffect(()=>{
        setNavigate(navigate)
      },[navigate])

      const loginUserDataHandler = (data) => {
        setUserData(data);
        
      };
      const registerUserDataHandler = (data) => {
        setUserData(data);
      };

      const logoutUserHandler = () => {
        setUserData({});
      };

      const errorHandler = (message) => {
        setError(message);
        setTimeout(()=>setError(''),2000)
      }

      const detailsHandler = async (bookId) => {

        try {

          const result = await getBook(bookId);
          console.log("📘 Book fetched: ", result); // debug here
          setBookDetails(result)
        }catch(err){
          console.error("❌ Failed to fetch book details:", err);
          if (err.message === 'Resource not found') {
            setBookDetails({});
            return;
          } else {
            errorHandler(err.message)
          }
        }
      }

      const editHandler = async(formData,id) => {
        const data = Object.fromEntries(formData)
        const result = await editBook(data,id);
        setBookDetails(result);
        

        navigate(`/books/details/${id}`)
      }

      const deleteHandler = async(id) => {
        await deleteBook(id);
        setBookDetails({})
      }

      const messageHandler = (message) => {
        setSuccessMessage(message);

        setTimeout(()=>setSuccessMessage(''),2000);
      }
      
      return (
        <UserContext.Provider  value={{
          user: userData,
          book: bookDetails,
          editHandler,
          // loadBookByIdEdit,
          deleteHandler,
          messageHandler,
          detailsHandler,
          loginUserDataHandler, 
          logoutUserHandler, 
          errorHandler, 
          registerUserDataHandler, 
          isAuthenticated: !!userData.accessToken
          }}>

          {error && <ErrorModal message={error} />}
          {successMessage && <SuccessModal message={successMessage}/>}
          {children}
        </UserContext.Provider>
          
        );
    }