import '../sell/sell.css'

export default function Sell() {
 
    return (
        <section className="create-container">
            <div className='create-bg-box' ></div>
          <div className="create-form-box">
            <h2>Sell your book</h2>
            <form  className="create-form">
              <label>
                Title:
                <input type="text" name="title" required/>
              </label>
    
              <label>
                Author:
                <input type="text" name="author"required/>
              </label>
    
              <label>
                Image URL:
                <input type="url" name="image" required/>
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
