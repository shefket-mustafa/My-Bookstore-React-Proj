import { useEffect, useState } from "react";
import { del, get, post, put } from "../requester";
import { useAuthContext } from "../../provider-and-context/AuthContext";
import { usePopUpContext } from "../../provider-and-context/PopUpContext";

const deployedUrl = 'https://my-bookstore-react-proj-5.onrender.com/books';
const baseUrl = 'http://localhost:3030/books';

    

    //Get all books
export const useBooks = () => {
    const [books, setBooks] = useState([]);

    useEffect(()=>{
        get(baseUrl,null)
        .then(setBooks)
    },[])

    return { books, setBooks };

}

export const useSellBook = () => {
  const create = async (bookData) => {
    const result = await post(baseUrl, bookData);
    return result;
  };

  return { create };
};
  

//Get one book
export const useGetBook = () => {
    
    const getBook = async (bookId) => {
       const result = await get(`${baseUrl}/${bookId}`,null)
        
       return result;
    }
    return {getBook}
};

//Edit a book
export const useEditBook = () => {

    const editBook = async (formData,id) => {
        const result = await put(`${baseUrl}/${id}`, formData)
    
        return result;
    };
    return {editBook};
};

//Delete a book
export const useDeleteBook = () => {

    const deleteBook = async (id) => {
        return await del(`${baseUrl}/${id}`)
        
    }

    return {deleteBook}
};

export const useSearchBooks = () => {
    const {errorMessageHandler} = usePopUpContext();

    const search = async (title) => {

        try{

            const result = await get(`${baseUrl}?title=${encodeURIComponent(title)}`);
            return result;
        }catch(err){
            errorMessageHandler(err.message)
        }
    }

    return {search}
}



