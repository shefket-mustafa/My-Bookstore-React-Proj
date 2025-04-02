import { useNavigate } from 'react-router';
import { useSellBook } from '../../utils//utils-book-API/bookApi.js';
import '../sell/sell.css'
import { useUserContext } from '../../provider-and-context/UserContext';
import { registerValidator, sellValidator } from '../../utils/validators/validator.js';

export default function Sell() {

    const { create } = useSellBook();
    const { errorHandler} = useUserContext()
    const navigate = useNavigate();

    const sellBookFormAction = async (formData) => {
      const bookData = Object.fromEntries(formData);

      
      try{
        sellValidator(bookData);

        await create(bookData);

        navigate('/books/catalog');
        
      }catch(err){
        errorHandler(err.message)
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
                <input type="url" name="imageUrl" required/>
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
