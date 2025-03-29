import { Link, useParams } from 'react-router';
import { useUserContext } from '../../provider-and-context/UserContext';
import './details.css';
import { useEffect } from 'react';

export default function Details() {
    const {bookId} = useParams();

  const {
    user,
    book,
    detailsHandler
  } = useUserContext();
                            

    useEffect(()=>{

        if(!book.title){

        detailsHandler(bookId)
        }
    },[bookId,detailsHandler,book.title])

   
    

    const isOwner = user._id === book._ownerId;
    

  return (
    <section className="details-wrapper">
        <div className="details-bg-box"></div>
        
      <div className="details-card">
        <div className="details-image-box">
          <img src={book.imageUrl} alt={book.title} className="details-image" />
        </div>

        <div className="details-info">
          <h2 className="details-title" style={{ color: 'white'}}>{book.title}</h2>
          <p className="details-author"><strong style={{ color: '#2c7873'}}>Author: </strong> {book.author}</p>
          <p className="details-price"><strong style={{ color: '#2c7873'}}>Price: </strong> ${book.price}</p>
          <p className="details-description"><strong style={{ color: '#2c7873'}}>Comment:</strong></p>
          <p>{book.comment}</p>
        </div>

        {isOwner && <div className='details-buttons'>
            <Link className='edit-link' to={`/books/edit/${book._id}`} >Edit</Link>
            <Link className='delete-link' to={`/books/delete/${book._id}`}>Delete</Link>
        </div>}
        
      </div>
    </section>
  );
}
