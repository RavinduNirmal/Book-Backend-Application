const { DataTypes } = require('sequelize');
const sequelize = require('./sequelize');  
const Author = require('../model/author.model');
const Category = require('../model/author.model');

const Book = sequelize.define('Book', {
  ISBNno: {
    type: DataTypes.STRING,
    allowNull: false, 
    validate: {
        isAlphanumeric: true, 
      }   
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
      }   
  },
  Authour: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
        notNull: { msg: "Authour is required" },
      },
  },

});


// //one-to-many relationship between Author and Book
// Author.hasMany(Book);
// Book.belongsTo(Author);

// // one-to-many relationship between Category and Book
// Category.hasMany(Book);
// Book.belongsTo(Category);

module.exports = Book;

