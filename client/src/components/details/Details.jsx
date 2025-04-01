import { Link, useParams } from 'react-router';
import { useUserContext } from '../../provider-and-context/UserContext';
import './details.css';
import { useEffect, useState } from 'react';
import { useGetBookLikes, useHasUserLikedBook, useLikeBook } from '../../utils/utils-likes-api/likesApi';

export default function Details() {
    const {bookId} = useParams();
    const {getBookLikes} = useGetBookLikes();
    const {likeBook} = useLikeBook();
    const {hasLikedBook} = useHasUserLikedBook();
    
    const [likes, setLikes] = useState(0);
    const [hasLiked, setHasLiked] = useState(false);
    
    const {
      user,
      book,
      detailsHandler,
      errorHandler
    } = useUserContext();

    const isOwner = user._id === book._ownerId;
    

  
    useEffect(() => {
      if (book._id !== bookId) {
        detailsHandler(bookId);
      }
    }, [bookId,book._id,detailsHandler]);

    useEffect(() => {
      const fetchLikeData = async () => {
        if (!book._id) return;
        try {
          const count = await getBookLikes(book._id);
          setLikes(count);
    
          if (user && !isOwner) {
            const liked = await hasLikedBook(book._id, user._id);
            
            setHasLiked(liked);
          }
        } catch (err) {
          errorHandler(err.message);
        }
      };
    
      fetchLikeData();
    }, [book._id, getBookLikes, isOwner, hasLikedBook, user,errorHandler]);

  
    const likeHandler = async () => {
      try {
        await likeBook(book._id, user._id);
        setHasLiked(true);
    
        const updatedCount = await getBookLikes(book._id);
        setLikes(updatedCount);
      } catch (err) {
        errorHandler(err.message);
      }
    };
   

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
          
          <p className="details-likes"><strong style={{ color: '#2c7873'}}>Likes: </strong> {likes}</p> 
          <p className="details-price"><strong style={{ color: '#2c7873'}}>Price: </strong> ${book.price}</p>
          <p className="details-description"><strong style={{ color: '#2c7873'}}>Comment:</strong></p>
          <p>{book.comment}</p>
        </div>

        {isOwner && <div className='details-buttons'>
            <Link className='edit-link' to={`/books/edit/${book._id}`} >Edit</Link>
            <Link className='delete-link' to={`/books/delete/${book._id}`}>Delete</Link>
        </div>}
        {user.accessToken && !isOwner && !hasLiked && (
        <div className="link-button">
        <button onClick={likeHandler} className="like-link">Like</button>
        </div>
)}
    
      </div>
    </section>
  );
}
