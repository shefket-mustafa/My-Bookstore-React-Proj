import { useNavigate } from 'react-router';
import { useSellBook } from '../../utils//utils-book-API/bookApi.js';
import '../sell/sell.css'
import {  sellValidator } from '../../utils/validators/validator.js';
import { usePopUpContext } from '../../provider-and-context/PopUpContext.jsx';

export default function Sell() {

    const { create } = useSellBook();
    
    const {errorMessageHandler, successMessageHandler} = usePopUpContext();
    
    const navigate = useNavigate();

    const sellBookFormAction = async (formData) => {
      const bookData = Object.fromEntries(formData);

      
      try{
        sellValidator(bookData);

        await create(bookData);

        navigate('/books/catalog');
        successMessageHandler('Book posted!')
      }catch(err){
        errorMessageHandler(err.message)
      }
      
    }

 
    return (
        <section className="create-container">
            <div className='create-bg-box' ></div>
          <div className="create-form-box">
            <h2>Sell your book</h2>
            <form action={sellBookFormAction} className="create-form">
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
                <input type="url" name="image_url" required/>
              </label>
    
              <label>
                Price:
                <input type="number" name="price" required step="0.01" min="0"
                />
              </label>

              <label>
              Comment:
               <textarea
                  className="comments-field"
                    name="comment"
                    required
                    minLength="5"
                    maxLength="120"
                ></textarea>
              </label>

    
              <button type="submit">Add Book</button>
            </form>
          </div>
        </section>
      );
    }
