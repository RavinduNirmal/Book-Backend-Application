const Book = require("../model/book.model");

const BookRepository = {
  findBookByISBNno: async (ISBNno) => {
    return await Book.findOne({ where: { ISBNno } });
  },
  createBook: async (bookData) => {
    return await Book.create(bookData);
  },
  findAllBooks: async () => {
    return await Book.findAll();
  },
  findBookById: async (bookId) => {
    return await Book.findOne({ where: { id: bookId } });
  },
};

module.exports = BookRepository;
