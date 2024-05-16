const Book = require("../model/book.model");

const CreateBooking = async (req, res) => {
  try {
    const { ISBNno, Category, Title, Authour } = req.body;
    const booking = await Book.create({ ISBNno, Category, Title, Authour });
    res.status(201).json(booking);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getAllBookings = async (req, res) => {
  try {
    const allBookings = await Book.findAll();
    console.log("All bookings fetched successfully:", allBookings);
    res.json(allBookings);
  } catch (error) {
    console.error("Error fetching all bookings:", error);
    res.status(400).json(error);
  }
};

const getABooking = async (req, res) => {
  let BookId = req.params.id;
  console.log(BookId);
  const book = await Book.findOne({where:{id:BookId}})
    .then((book) => {
      res.json(book);
    })
    .catch(() => {
      res.status(500).send({ status: "Error" });
    });
};

const getBookByISBN = async (req, res) => {
  try {
    const { ISBNno } = req.params.ISBNno;

    // Find the book by ISBN
    const book = await Book.findOne({where:{ISBNno:ISBNno}});
    console.log(book);

    if (!book) {
      return res.status(404).json({ msg: "Book not found", success: false });
    }

    console.log("Book fetched successfully:", book);
    res.json({ success: true, book });
  } catch (error) {
    console.error("Error fetching book by ISBN:", error);
    res.status(400).json({ error: error.message });
  }
};

module.exports = { CreateBooking, getAllBookings, getABooking, getBookByISBN };
