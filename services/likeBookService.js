const BookLikeRepository = require('../repository/bookLikeRepository');
const BookRepository = require("../repository/bookRepository");
const UserRepository = require('../repository/userRepository');


const BookLikeService = {
  likeToABook: async (userId, bookId) => {
    const user = await UserRepository.findUserById(userId);
    if (!user) {
      throw new Error('User not found');
    }

    const book = await BookRepository.findBookById(bookId);
    if (!book) {
      throw new Error('Book not found');
    }

    const existingLike = await BookLikeRepository.findLikeByUserAndBook(userId, bookId);
    if (existingLike) {
      throw new Error('User has already liked this book');
    }

    await BookLikeRepository.createLike(userId, bookId);

    const likeCount = await BookLikeRepository.countLikesByBookId(bookId);

    return { success: true, likeCount };
  },
};

module.exports = BookLikeService;