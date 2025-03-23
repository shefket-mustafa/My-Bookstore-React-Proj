import '../catalog/catalog.css';
import { useBooks } from '../../utils-book-API/bookApi';
import CatalogItems from './catalog-item/CatalogItems';

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
          {books.map((book) => <CatalogItems key={book.id} book={book}/>)}
        </div>
      </div>
    </section>
  );
}
