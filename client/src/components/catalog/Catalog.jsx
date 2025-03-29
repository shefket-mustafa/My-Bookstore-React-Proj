import '../catalog/catalog.css';
import { useBooks, useSearchBooks } from '../../utils-book-API/bookApi';
import CatalogItems from './catalog-item/CatalogItems';
import { useEffect, useState } from 'react';
import Pagination from '../pagination/Pagination';

export default function Catalog() {

    const [searchValue, setSearchValue] = useState('');
    const [filteredBooks, setFilteredBooks] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const  {books}  = useBooks();
    const {search} = useSearchBooks();

const pageSize = 5;
const paginatedBooks = filteredBooks.slice(
  (currentPage - 1) * pageSize,
  currentPage * pageSize
);
const totalPages = Math.ceil(filteredBooks.length / pageSize);

    useEffect(() => {
      setFilteredBooks(books);
    }, [books]);

    const onSearch = async() => {
      if(searchValue.trim() === ''){
        setFilteredBooks(books)
        return
      } 
        const result = await search(searchValue)
        setFilteredBooks(result)
    } 

    
    
  return (
    <>
    <section className="booklist-container">
      <div className="booklist-bg-box"></div>
      <div className="catalog-content">
        <div className="catalog-heading">
        <h2>Search Books</h2>
          <input
            type="text"
            placeholder="Search by title..."
            // value={searchTerm}
            onChange={(e) => {
              setSearchValue(e.target.value)
            }
            } 
            className="search-input"
          />
          <button onClick={onSearch} className='search-btn'>Search</button>
        </div>
        <div className="book-grid">
        {paginatedBooks.length > 0 ? paginatedBooks.map((book) => (<CatalogItems key={book._id} book={book} />)) : (
      <div><h1>Could not find your book!</h1></div>)}

        </div>
        
    <Pagination  
    currentPage={currentPage}
    totalPages={totalPages}
    onPageChange={(page) => setCurrentPage(page)}/>
      </div>
    </section>
    </>
  );
}
