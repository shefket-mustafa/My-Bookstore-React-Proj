import { Link } from "react-router";
import { useBookContext } from "../../../provider-and-context/BooksContext";

export default function CatalogItems({book}) {
  const {detailsHandler} = useBookContext();
  

    
    
  
  return (
    <div key={book.id} className="book-card">
    <img src={book.image_url} alt={book.imageAlt} />
    <h3>{book.title}</h3>
    <p>by {book.author}</p>
    <p className="price">${book.price}</p>

  <Link to={`/books/${book.id}`} className="details-button">Details</Link> 
    
    {/* <>
     <button className="buy-button">Edit</button>
      <button className="buy-button">Delete</button>
      </> */}
    
    
  </div>
    );
}