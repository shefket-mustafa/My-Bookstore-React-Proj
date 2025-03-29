import './pagination.css'
export default function Pagination({ currentPage, totalPages, onPageChange }) {
  
  const pages = [];
for (let i = 1; i <= totalPages; i++) {
  pages.push(i);
}

  return (
    <div className="pagination">
      <button
        className="pagination-btn"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >← Prev</button>

      {pages.map((page) => (
        <button
          key={page}
          className={`pagination-btn ${page === currentPage ? 'active' : ''}`}
          onClick={() => onPageChange(page)}>{page}</button>))}

      <button
        className="pagination-btn"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}>Next →</button>
    </div>
  );
}
