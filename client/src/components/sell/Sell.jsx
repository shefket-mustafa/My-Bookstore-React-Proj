import { useSellBook } from '../../utils-book-API/bookApi';
import '../sell/sell.css'

export default function Sell() {

    const { create } = useSellBook();

    const sellBookFormAction = (formData) => {
      const bookData = Object.fromEntries(formData);
      
      console.log(bookData);
      
    }

 
    return (
        <section className="create-container">
            <div className='create-bg-box' ></div>
          <div className="create-form-box">
            <h2>Sell your book</h2>
            <form action={sellBookFormAction} className="create-form">
              <label>
                Title:
                <input type="text" name="title" required/>
              </label>
    
              <label>
                Author:
                <input type="text" name="author" required/>
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
    
              <button type="submit">Add Book</button>
            </form>
          </div>
        </section>
      );
    }
