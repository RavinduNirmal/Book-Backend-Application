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

module.exports = { likeToABook };
