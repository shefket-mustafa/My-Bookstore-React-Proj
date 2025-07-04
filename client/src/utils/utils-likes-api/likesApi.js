import { get, post, put } from "../requester";


const baseUrl = 'https://my-bookstore-react-proj-5.onrender.com/data/likes';



export function useGetBookLikes() {
    const getBookLikes = async (bookId) => {
      const response = await get(`${baseUrl}/count/${bookId}`);
      return response.count;
    };
  
    return { getBookLikes };
  }

  export function useHasUserLikedBook() {
    const hasLikedBook = async (bookId, userId) => {
        const query = encodeURIComponent(`bookId="${bookId}" AND _ownerId="${userId}"`);
        const url = `${baseUrl}?where=${query}`;
        const result = await get(url);
        return result.length > 0;
    };

    return { hasLikedBook };
}



export function useLikeBook() {
    const likeBook = async (bookId, userId) => {
      return await post(baseUrl, {
        bookId,
        _ownerId: userId, 
      });
    };
  
    return { likeBook };
  }
    
