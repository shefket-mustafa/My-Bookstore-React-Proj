import { useNavigate, useParams } from "react-router";
import { useUserContext } from "../../provider-and-context/UserContext";
import { useEffect } from "react";

export default function Delete() {

    const {deleteHandler} = useUserContext();
    const { bookId } = useParams(); 
    const navigate = useNavigate();

    useEffect(()=>{

        deleteHandler(bookId)
        navigate('/books/catalog')

    },[bookId,deleteHandler,navigate])



  return (
      <>
      </>
    );
}