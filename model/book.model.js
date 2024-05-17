const { DataTypes } = require('sequelize');
const sequelize = require('./sequelize');  
const Author = require('../model/author.model.js');

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

// Book.belongsTo(Author);

// console.log('Book model:', Book);
// console.log('Author model in Book:', Author);
// console.log('Book associations:', Book.associations);

module.exports = Book;
