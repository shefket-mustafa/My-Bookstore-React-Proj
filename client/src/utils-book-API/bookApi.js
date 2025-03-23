import { useEffect, useState } from "react";
import { get, post, requester } from "../utils/requester";

const baseUrl = 'http://localhost:3030/data/books';

export const useBooks = () => {
    const [books, setBooks] = useState([]);

    useEffect(()=>{
        get(baseUrl)
        .then(setBooks)
    },[])

    return { books };

}

export const useSellBook = () => {

    const create = (bookData) => {
        //TODO userID pri dobawqne
        bookData={
        }
        post(baseUrl,bookData);
    };

    return create;
};