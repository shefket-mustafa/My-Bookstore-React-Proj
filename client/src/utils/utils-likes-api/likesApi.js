import { get, post, put } from "../requester";


const baseUrl = 'http://localhost:3030/data/likes';



export function useGetBookLikes() {
    const getBookLikes = async (bookId) => {
        const query = encodeURIComponent(`bookId="${bookId}"`);
        const url = `${baseUrl}?where=${query}`;
        const result = await get(url);
        return result.length;
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
    const likeBook = async (bookId) => {
        const result = await post(baseUrl, { bookId }); 
        return result;
    };

    return { likeBook };
}
    
