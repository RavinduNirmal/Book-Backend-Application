const Book = require("../model/book.model");
const BookDTO = require("../dto/book.dto");
const BookService = require("../services/bookService");

const CreateBooking = async (req, res) => {
  try {
    const { ISBNno, Category, Title, Authour } = req.body;

    const book = await BookService.createBook({ ISBNno, Category, Title, Authour });
    res.status(201).json(book);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getAllBookings = async (req, res) => {
  try {
    const allBooks = await BookService.getAllBooks();
    console.log("All Books fetched successfully:", allBooks);
    res.json(allBooks);
  } catch (error) {
    console.error("Error fetching all books:", error);
    res.status(400).json({ error: error.message });
  }
};

const getABooking = async (req, res) => {
  const bookId = req.params.id;

  try {
    const book = await BookService.getBookById(bookId);
    const bookDTO = new BookDTO(book);
    res.json(bookDTO);
  } catch (error) {
    if (error.message === 'Book not found') {
      res.status(404).json({ message: error.message });
    } else {
      console.error(error);
      res.status(500).json({ status: 'Error', message: error.message });
    }
  }
};
const getBookByISBN = async (req, res) => {
  try {
    const { ISBNno } = req.params.ISBNno;

    // Find the book by ISBN
    const book = await BookService.getBookByISBN(ISBNno);
    res.json({ success: true, book });
  } catch (error) {
    console.error("Error fetching book by ISBN:", error);
    res.status(400).json({ error: error.message });
  }
};

module.exports = { CreateBooking, getAllBookings, getABooking, getBookByISBN };
