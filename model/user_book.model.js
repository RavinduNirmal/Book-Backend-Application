const { DataTypes } = require("sequelize");
const sequelize = require("./sequelize");
const Book = require("../model/book.model");

const BookLike = sequelize.define(
  "BookLike",
  {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    bookId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    indexes: [
      {
        unique: true,
        fields: ["userId", "bookId"],
      },
    ],
  }
);
// BookLike.belongsTo(Book);

module.exports = BookLike;
