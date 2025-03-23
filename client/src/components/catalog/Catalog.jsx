import '../catalog/catalog.css';
import { useBooks } from '../../utils-book-API/bookApi';

export default function Catalog() {
    const  {books}  = useBooks();
    console.log(books);
    
  return (
    <section className="booklist-container">
      <div className="booklist-bg-box"></div>
      <div className="catalog-content">
        <div className="catalog-heading">
          <h2>Available Books</h2>
        </div>
        <div className="book-grid">
          {books.map((book) => (
            <div key={book.id} className="book-card">
              <img src={book.imageSrc} alt={book.imageAlt} />
              <h3>{book.title}</h3>
              <p>by {book.author}</p>
              <p className="price">{book.price}</p>
              <button className="buy-button">Buy Now</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
