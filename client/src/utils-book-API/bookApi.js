import { useEffect, useState } from "react";
import { del, get, post, put, requester } from "../utils/requester";

const baseUrl = 'http://localhost:3030/data/books';

export const useBooks = () => {
    const [books, setBooks] = useState([]);

    useEffect(()=>{
        get(baseUrl,null)
        .then(setBooks)
    },[])

    return { books };

}

export const useSellBook = () => {

    const create = async (bookData) => {
        
        const result = await post(baseUrl,bookData);
    };

    return {create};
};

export const useGetBook = () => {
    
    const getBook = async (bookId) => {
       const result = await get(`${baseUrl}/${bookId}`,null)
        
       return result;
    }
    return {getBook}
};

export const useEditBook = () => {

    const editBook = async (formData,id) => {
        const result = await put(`${baseUrl}/${id}`, formData)
        console.log(result);
        return result;
    };
    return {editBook};
};

export const useDeleteBook = () => {

    const deleteBook = async (id) => {
        return await del(`${baseUrl}/${id}`)
    }

    return {deleteBook}
};

