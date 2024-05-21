const Author = require("../model/author.model");
const Book = require("../model/book.model");
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
  countLikesByAllBooks: async () => {
    return await BookLike.count({
      group: ["Book.AuthorId"],
      include: {
        model: Book,
      },
    });
  },
};

module.exports = BookLikeRepository;
