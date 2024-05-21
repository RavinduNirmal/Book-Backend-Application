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

Book.associate = (models) => {
  Book.belongsTo(models.Author, { foreignKey: 'Author', as: 'author' });
};


// Book.belongsTo(Author);


module.exports = Book;
