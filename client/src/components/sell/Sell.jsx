import { useNavigate } from "react-router";
import { useSellBook } from "../../utils//utils-book-API/bookApi.js";
import "../sell/sell.css";
import { sellValidator } from "../../utils/validators/validator.js";
import { usePopUpContext } from "../../provider-and-context/PopUpContext.jsx";
import { useState } from "react";

export default function Sell() {
  const { create } = useSellBook();
  const [isLoading, setIsLoading] = useState(false);

  const { errorMessageHandler, successMessageHandler } = usePopUpContext();

  const navigate = useNavigate();

  const sellBookFormAction = async (formData) => {
    const bookData = Object.fromEntries(formData);

    try {
      setIsLoading(true);
      sellValidator(bookData);

      await create(bookData);

      navigate("/books/catalog");
      successMessageHandler("Book posted!");
    } catch (err) {
      errorMessageHandler(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="create-container">
      <div className="create-bg-box"></div>
      <div className="create-form-box">
        <h2>Sell your book</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            sellBookFormAction(new FormData(e.target));
          }}
          className="create-form"
        >
          <label>
            Title:
            <input type="text" name="title" maxLength="20" required />
          </label>

          <label>
            Author:
            <input type="text" name="author" maxLength="20" required />
          </label>

          <label>
            Image URL:
            <input type="url" name="image_url" required />
          </label>

          <label>
            Price:
            <input type="number" name="price" required step="0.01" min="0" />
          </label>

          <label>
            Description:
            <textarea
              className="comments-field"
              name="comment"
              placeholder="Describe the condition of the book, any notes, etc."
              required
              minLength="5"
              maxLength="120"
            ></textarea>
          </label>

          <button type="submit" disabled={isLoading}>
            {isLoading ? "Saving..." : "Add Book"}
          </button>
        </form>
      </div>
    </section>
  );
}
