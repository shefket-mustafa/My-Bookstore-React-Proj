export default function CatalogItems({book}) {
  return (
    <div key={book.id} className="book-card">
    <img src={book.imageUrl} alt={book.imageAlt} />
    <h3>{book.title}</h3>
    <p>by {book.author}</p>
    <p className="price">{book.price}</p>
    <button className="buy-button">Buy Now</button>
  </div>
    );
}