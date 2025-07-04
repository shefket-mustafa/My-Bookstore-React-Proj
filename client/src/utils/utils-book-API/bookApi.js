import { useEffect, useState } from "react";
import { del, get, post, put, requester } from "../requester";
import { useUserContext } from "../../provider-and-context/UserContext";

const baseUrl = 'https://my-bookstore-react-proj-5.onrender.com/books';

    

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
    const { user } = useUserContext();
  
    const create = async (bookData) => {
      const ownerId = user?.user?._id;
  
      if (!ownerId) throw new Error("User not authenticated");
  
      const completeData = {
        ...bookData,
        _ownerId: ownerId, 
      };
  
      const result = await post(baseUrl, completeData);
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
    const {errorHandler} = useUserContext();

    const search = async (title) => {

        try{

            const result = await get(`${baseUrl}?title=${encodeURIComponent(title)}`);
            return result;
        }catch(err){
            errorHandler(err.message)
        }
    }

    return {search}
}



