  import '../catalog/catalog.css';
  import { useBooks, useSearchBooks } from '../../utils/utils-book-API/bookApi.js';
  import CatalogItems from './catalog-item/CatalogItems';
  import { useEffect, useState } from 'react';
  import Pagination from '../pagination/Pagination';
import { usePopUpContext } from '../../provider-and-context/PopUpContext.jsx';

  export default function Catalog() {

    const {search} = useSearchBooks();
    const  {books}  = useBooks();
    const {errorMessageHandler} = usePopUpContext()

      const [searchValue, setSearchValue] = useState('');
      const [filteredBooks, setFilteredBooks] = useState([]);
      const [currentPage, setCurrentPage] = useState(1);
      const [searchPerformed, setSearchPerformed] = useState(false);

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
        setSearchPerformed(true);

        if(searchValue.trim() === ''){
          setFilteredBooks(books)
          return
        } 
        try{
          const result = await search(searchValue)
          setFilteredBooks(result)

        }catch(err){
          errorMessageHandler(err.message)
        }
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
    {paginatedBooks.length > 0 ? ( paginatedBooks.map((book) => ( <CatalogItems key={book._id} book={book} />))) 
    : (
      <>
        {searchPerformed ? (
          <h1>Could not find your book!</h1>
        ) : (
          <h1>No books in the catalog yet.</h1>
        )}
      </>
    )}
  </div>
          
      {totalPages > 0 && (
      <Pagination  
      currentPage={currentPage}
      totalPages={totalPages}
      onPageChange={(page) => setCurrentPage(page)}
      />
      )}
        </div>
      </section>
      </>
    );
  }
