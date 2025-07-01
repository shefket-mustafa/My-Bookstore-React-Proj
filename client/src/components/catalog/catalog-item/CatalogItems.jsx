import { Link, useParams } from "react-router";
import { useUserContext } from "../../../provider-and-context/UserContext";

export default function CatalogItems({book}) {
  const {detailsHandler} = useUserContext();
  

    
    
  
  return (
    <div key={book._id} className="book-card">
    <img src={book.imageUrl} alt={book.imageAlt} />
    <h3>{book.title}</h3>
    <p>by {book.author}</p>
    <p className="price">${book.price}</p>

  <Link to={`/books/${book._id}`} className="details-button">Details</Link> 
    
    {/* <>
     <button className="buy-button">Edit</button>
      <button className="buy-button">Delete</button>
      </> */}
    
    
  </div>
    );
}