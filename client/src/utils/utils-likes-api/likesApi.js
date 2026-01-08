import { get, post, put } from "../requester";


const deployedUrl = 'https://my-bookstore-react-proj-5.onrender.com/data/likes';
const baseUrl = 'http://localhost:3030/likes'



export function useGetBookLikes() {
    const getBookLikes = async (bookId) => {
      const response = await get(`${baseUrl}/count/${bookId}`);
      return response.count;
    };
  
    return { getBookLikes };
  }

  export function useHasUserLikedBook() {
    const hasLikedBook = async (bookId, userId) => {
        const url = `${baseUrl}?bookId=${bookId}&userId=${userId}`;
        const result = await get(url);
        return result.length > 0;
    };

    return { hasLikedBook };
}



export function useLikeBook() {
    const likeBook = async (bookId, userId) => {
      return await post(baseUrl, {
        bookId,
        userId, 
      });
    };
  
    return { likeBook };
  }
    
