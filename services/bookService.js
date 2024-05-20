const BookRepository = require("../repository/bookRepository");

const BookService = {
  createBook: async (bookData) => {
    const { ISBNno } = bookData;

    const existingBook = await BookRepository.findBookByISBNno(ISBNno);
    if (existingBook) {
      throw new Error("Book with this ISBN already exists");
    }

    // Create the user
    return await BookRepository.createBook(bookData);
  },
  getAllBooks: async () => {
    return await BookRepository.findAllBooks();
  },
  getBookById: async (bookId) => {
    const book = await BookRepository.findBookById(bookId);
    if (!book) {
      throw new Error("Book not found");
    }
    return book;
  },
};

module.exports = BookService;
