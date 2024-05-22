const { DataTypes } = require("sequelize");
const sequelize = require("./sequelize");
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
});

Book.hasMany(BookLike);
BookLike.belongsTo(Book);

module.exports = Book;
