const sequelize = require("../model/sequelize");
const Book = require("../model/book.model");
const Author = require("../model/author.model");
const BookLike = require("../model/user_book.model");
const BookLikeService = require("../services/likeBookService");

const likeToABook = async (req, res) => {
  
  const { userId, bookId } = req.body;
  try {
    const result = await BookLikeService.likeToABook(userId, bookId);
    res.status(201).json(result);
  } catch (error) {
    if (error.message === 'User not found' || error.message === 'Book not found' || error.message === 'User has already liked this book') {
      res.status(400).json({ msg: error.message, success: false });
    } else {
      res.status(500).json({ error: error.message });
    }
  }
};

const getLikeCountByAuthor = async (req, res) => {  
  try {
    const result = await BookLikeService.countLikesByAllBooks();
    res.status(201).json(result);
  } catch (error) {
    console.error("Error fetching all books Counts:", error);
    res.status(400).json({ error: error.message });
  }
};

module.exports = { likeToABook,getLikeCountByAuthor };
