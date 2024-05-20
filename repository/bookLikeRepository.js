const BookLike = require("../model/user_book.model");

const BookLikeRepository = {
  findLikeByUserAndBook: async (userId, bookId) => {
    return await BookLike.findOne({ where: { userId, bookId } });
  },
  createLike: async (userId, bookId) => {
    return await BookLike.create({ userId, bookId });
  },
  countLikesByBookId: async (bookId) => {
    return await BookLike.count({ where: { bookId } });
  },
};

module.exports = BookLikeRepository;
