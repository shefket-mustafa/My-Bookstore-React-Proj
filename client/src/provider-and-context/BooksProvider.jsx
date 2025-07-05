import { useState } from "react";
import {
  useDeleteBook,
  useEditBook,
  useGetBook,
} from "../utils/utils-book-API/bookApi";
import { useNavigate } from "react-router";
import { BookContext } from "./BooksContext";
import { usePopUpContext } from "./PopUpContext";

export default function BookProvider({ children }) {
  const [bookDetails, setBookDetails] = useState({});
  const [bookLoading, setBookLoading] = useState(false);
  const { getBook } = useGetBook();
  const { editBook } = useEditBook();
  const { deleteBook } = useDeleteBook();
  const { errorMessageHandler } = usePopUpContext();
  const navigate = useNavigate();

  const detailsHandler = async (bookId) => {
    try {
      setBookLoading(true);
      setBookDetails({});
      const result = await getBook(bookId);
      setBookDetails(result);
    } catch (err) {
      console.error("❌ Failed to fetch book details:", err);
      if (err.message === "Resource not found") {
        setBookDetails({});
        return;
      } else {
        errorMessageHandler(err.message);
      }
    } finally {
      setBookLoading(false);
    }
  };

  const editHandler = async (formData, id) => {
    const data = Object.fromEntries(formData);
    const result = await editBook(data, id);
    setBookDetails(result);

    navigate(`/books/details/${id}`);
  };

  const deleteHandler = async (id) => {
    await deleteBook(id);
    setBookDetails({});
  };

  return (
    <BookContext.Provider
      value={{
        bookDetails,
        editHandler,
        deleteHandler,
        detailsHandler,
        bookLoading,
      }}
    >
      {children}
    </BookContext.Provider>
  );
}
