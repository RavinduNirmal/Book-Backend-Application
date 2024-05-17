const User = require("../model/user.model");
const Book = require("../model/book.model");
const BookLike = require("../model/user_book.model");


const likeToABook = async (req, res) => {
  try {
    const { userId, bookId } = req.body;

    // Check if the user exists
    const user = await User.findByPk(userId);
    if (!user) {
      return res.status(404).json({ msg: "User not found", success: false });
    }

    // Check if the book exists
    const book = await Book.findByPk(bookId);
    if (!book) {
      return res.status(404).json({ msg: "Book not found", success: false });
    }

    // Check if the user has already liked the book
    const existingLike = await BookLike.findOne({ where: { userId, bookId } });
    if (existingLike) {
      return res.status(400).json({ msg: "User has already liked this book", success: false });
    }

    await BookLike.create({ userId, bookId });

    // Count the number of likes for the specified book
    const likeCount = await BookLike.count({ where: { bookId } });

    res.status(201).json({ success: true, likeCount });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { likeToABook };
