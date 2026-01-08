

export const sellValidator = (bookData) => {
    if (!bookData.title.trim() || !bookData.author.trim() || !bookData.image_url.trim() || !bookData.comment.trim()) {
      throw new Error("All fields must be filled in.");
    }
  
    if (bookData.title.length < 2 || bookData.author.length < 2) {
      throw new Error("Title and author must be at least 2 characters.");
    }
  
    if (!/^https?:\/\//.test(bookData.image_url)) {
      throw new Error("Image URL must start with http:// or https://");
    }
  
    if (isNaN(bookData.price) || Number(bookData.price) <= 0) {
      throw new Error("Price must be a positive number.");
    }
  
    if (bookData.comment.length < 5 || bookData.comment.length > 120) {
      throw new Error("Comment must be between 5 and 120 characters.");
    }
  };
  
  
  export const registerValidator = (email, password) => {
    const emailRegex = /^[a-zA-Z][a-zA-Z0-9._%+-]*@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;


    if (!emailRegex.test(email)) {
      throw new Error("Invalid email format.");
      
    }
  
    if (password.length < 4) {
        throw new Error ("Password must be at least 4 characters.");
      
    }
  
    
  }