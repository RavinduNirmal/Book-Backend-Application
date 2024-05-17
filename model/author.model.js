const { DataTypes } = require('sequelize');
const sequelize = require('./sequelize'); 
const Book = require('./book.model');  

const Author = sequelize.define('Author', {
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,    
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,    
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true, 
    validate: {
      isEmail: true, 
    },    
  },
  contactNo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// Author.hasMany(Book);
// console.log('Author model:', Author);

module.exports = Author;



