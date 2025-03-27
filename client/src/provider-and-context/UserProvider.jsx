import { useEffect, useState } from "react";
import { UserContext } from "./UserContext";
import ErrorModal from "../components/error-modal/ErrorModal";
import { useDeleteBook, useEditBook, useGetBook } from "../utils-book-API/bookApi";
import { Navigate, useNavigate } from "react-router";

    export default function UserProvider({children}) {

      const navigate = useNavigate();
      const [userData, setUserData] = useState({});
      const [bookDetails, setBookDetails] = useState({});
      const [error, setError] = useState('');
      const {getBook} = useGetBook();
      const {editBook} = useEditBook();
      const {deleteBook} = useDeleteBook();

      
      useEffect(()=>{
        const storedAuth = JSON.parse(localStorage.getItem('auth'));
        if(storedAuth?.accessToken){

          setUserData(storedAuth)
        }
      },[])

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
        setTimeout(()=>setError(''),1000)
      }

      const detailsHandler = async (bookId) => {

          const result = await getBook(bookId);
          setBookDetails(result)

          navigate(`/books/details/${bookId}`)
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

      // const loadBookByIdEdit = async (bookId) => {
      //   const result = await getBook(bookId);
      //   console.log('Fetched result:', result);
      //   setBookDetails(result);
        // I made this to make the edit page persistant on refresh
      // };
     


      return (
        <UserContext.Provider  value={{
          user: userData,
          book: bookDetails,
          editHandler,
          // loadBookByIdEdit,
          deleteHandler,
          detailsHandler,
          loginUserDataHandler, 
          logoutUserHandler, 
          errorHandler, 
          registerUserDataHandler, 
          isAuthenticated: !!userData.accessToken
          }}>

          {error && <ErrorModal message={error} />}
          {children}
        </UserContext.Provider>
          
        );
    }