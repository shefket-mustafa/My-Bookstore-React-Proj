import { createContext, useContext } from "react";

export const BookContext = createContext({
    bookDetails: '',
    editHandler: () => null,
    deleteHandler: () => null,
    bookLoading: ''
})

export const useBookContext = () => {
    const data = useContext(BookContext)

    return data
}