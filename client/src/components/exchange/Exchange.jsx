export default function Exchange() {
  // Sample book data
  const books = [
    {
      id: 1,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      price: "$12.99",
      imageSrc: "https://images.booksense.com/images/694/767/9781936767694.jpg",
      imageAlt: "Cover of The Great Gatsby",
    },
    {
      id: 2,
      title: "1984",
      author: "George Orwell",
      price: "$9.99",
      imageSrc: "https://mir-s3-cdn-cf.behance.net/project_modules/fs/b468d093312907.5e6139cf2ab03.png",
      imageAlt: "Cover of 1984",
    },
    {
      id: 3,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      price: "$14.99",
      imageSrc: "https://m.media-amazon.com/images/I/81aY1lxk+9L.jpg",
      imageAlt: "Cover of To Kill a Mockingbird",
    },
    {
      id: 4,
      title: "Moby Dick",
      author: "Herman Melville",
      price: "$10.99",
      imageSrc: "https://m.media-amazon.com/images/I/91xNmlf86yL.jpg",
      imageAlt: "Cover of Moby Dick",
    },
  ];

  return (
    <section className="booklist-container">
      <h2>Available Books</h2>
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
    </section>
  );
}
