

import { useBookContext } from '../../provider-and-context/BooksContext';
import './edit.css'
import { useParams } from "react-router";


export default function Edit() {

    const{editHandler,bookDetails: book} = useBookContext();
    
    const {bookId} = useParams();        


  return (
    <>
        <section className="edit-container">
            <div className='edit-bg-box' ></div>
          <div className="edit-form-box">
          <h3>Edit your book</h3>
            <form action={(formData)=>editHandler(formData,bookId)} className="edit-form">
              <label>
                Title:
                <input type="text" name="title" maxLength="20" required defaultValue={book.title}/>
              </label>
    
              <label>
                Author:
                <input type="text" name="author" maxLength="20" required defaultValue={book.author}/>
              </label>
    
              <label>
                Image URL:
                <input type="url" name="imageUrl" required defaultValue={book.imageUrl}/>
              </label>
    
              <label>
                Price:
                <input type="number" name="price" required step="0.01" min="0"
                defaultValue={book.price}/>
              </label>

              <label>
              Comment:
               <textarea
                  className="comments-field"
                    name="comment"
                    required
                    minLength="5"
                    maxLength="120"
                    defaultValue={book.comment}
                ></textarea>
              </label>

    
              <button className="edit-btn" type="submit">Edit Book</button>
            </form>
          </div>
        </section>
    </>
      
    );
}