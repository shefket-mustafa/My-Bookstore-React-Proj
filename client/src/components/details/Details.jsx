import { Link, useNavigate, useParams } from "react-router";
import { useUserContext } from "../../provider-and-context/UserContext";
import "./details.css";
import { useEffect, useState } from "react";
import {
  useGetBookLikes,
  useHasUserLikedBook,
  useLikeBook,
} from "../../utils/utils-likes-api/likesApi";

export default function Details() {
  const { bookId } = useParams();
  const navigate = useNavigate();

  const {
    user,
    book,
    bookLoading,
    detailsHandler,
    deleteHandler,
    errorHandler,
    messageHandler,
  } = useUserContext();

  const [likes, setLikes] = useState(0);
  const [hasLiked, setHasLiked] = useState(false);
  const [likesLoading, setLikesLoading] = useState(true);

  const { getBookLikes } = useGetBookLikes();
  const { likeBook } = useLikeBook();
  const { hasLikedBook } = useHasUserLikedBook();

  const userId = user?.user?._id;
const accessToken = user?.accessToken;

const isOwner = userId && book._ownerId === userId;

  // 🟡 Load the book when ID changes
  useEffect(() => {
    detailsHandler(bookId);
  }, [bookId]);

  // ✅ Load likes AFTER book is loaded
  useEffect(() => {
    if (!book._id) return;

    const fetchLikes = async () => {
      try {
        setLikesLoading(true);
        const count = await getBookLikes(book._id);
        setLikes(count);

        if (userId && userId !== book._ownerId) {
          const liked = await hasLikedBook(book._id, userId);
          setHasLiked(liked);
        }
      } catch (err) {
        console.error("Likes error:", err.message);
        errorHandler(err.message);
      } finally {
        setLikesLoading(false);
      }
    };

    fetchLikes();
  }, [book._id, userId]);

  const likeHandler = async () => {
    if (!book._id || !userId) {
      console.warn("❌ Cannot like, missing bookId or userId");
      return;
    }
  
    try {
      console.log("Sending like for:", book._id, userId);
      await likeBook(book._id, userId);
      setHasLiked(true);
  
      const updatedCount = await getBookLikes(book._id);
      setLikes(updatedCount);
  
      messageHandler('Book liked!');
    } catch (err) {
      console.error("❌ Like error:", err.message);
      errorHandler(err.message);
    }
  };
  
  

  const deleteAbook = async () => {
    const confirmation = confirm("Are you sure you want to delete this book?");
    if (confirmation) {
      await deleteHandler(bookId);
      navigate("/books/catalog");
      messageHandler("Book deleted!");
    }
  };

  console.log("🔍 user:", user);
console.log("🔍 userId:", userId);
console.log("🔍 accessToken:", accessToken);
console.log("🔍 isOwner:", isOwner);
console.log("🔍 hasLiked:", hasLiked);
console.log("🔍 likesLoading:", likesLoading);

  if (bookLoading || !book._id) {
    return (
      <section className="details-wrapper">
        <div className="details-bg-box"></div>
        <div className="details-card">
          <p style={{ color: "white", textAlign: "center" }}>
            Loading book details...
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="details-wrapper">
      <div className="details-bg-box"></div>
      <div className="details-card">
        <div className="details-image-box">
          <img src={book.imageUrl} alt={book.title} className="details-image" />
        </div>

        <div className="details-info">
          <h2 className="details-title" style={{ color: "white" }}>
            {book.title}
          </h2>
          <p className="details-author">
            <strong style={{ color: "#2c7873" }}>Author: </strong> {book.author}
          </p>
          <p className="details-likes">
            <strong style={{ color: "#2c7873" }}>Likes: </strong>
            {likesLoading ? "Loading..." : likes}
          </p>
          <p className="details-price">
            <strong style={{ color: "#2c7873" }}>Price: </strong> ${book.price}
          </p>
          <p className="details-description">
            <strong style={{ color: "#2c7873" }}>Comment:</strong>
          </p>
          <p>{book.comment}</p>

          {isOwner && (
            <div className="details-buttons">
              <Link className="edit-link" to={`/books/edit/${book._id}`}>
                Edit
              </Link>
              <button onClick={deleteAbook} className="delete-link">
                Delete
              </button>
            </div>
          )}

{accessToken && userId && !isOwner && !hasLiked && !likesLoading && (
  <div className="link-button">
    <button onClick={likeHandler} className="like-link">Like</button>
  </div>
)}
        </div>
      </div>
    </section>
  );
}
