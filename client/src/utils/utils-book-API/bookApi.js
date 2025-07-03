import { useEffect, useState } from "react";
import { del, get, post, put, requester } from "../requester";
import { useUserContext } from "../../provider-and-context/UserContext";

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

//Create a book
export const useSellBook = () => {

    const create = async (bookData) => {
        
        const result = await post(baseUrl,bookData);
    };

    return {create};
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



