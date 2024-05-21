const { DataTypes } = require("sequelize");
const sequelize = require("./sequelize");
const Author = require("../model/author.model.js");
const BookLike = require("../model/user_book.model");

const Book = sequelize.define("Book", {
  ISBNno: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isAlphanumeric: true,
    },
  },
  Category: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Title: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isAlphanumeric: true,
    },
  },
  // AuthourId: {
  //   type: DataTypes.NUMBER,
  //   allowNull: false,
  //   validate: {
  //       notNull: { msg: "Authour is required" },
  //     },
  // },
});

Book.hasMany(BookLike);
BookLike.belongsTo(Book);

module.exports = Book;
