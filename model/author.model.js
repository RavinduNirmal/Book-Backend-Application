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
    validate: {
      is: {
        args: /^[0-9]{10}$/, 
        msg: 'Contact number must be 10 digits and contain only numbers',
      },
    },
  },
  // likeCount:{
  //   type: DataTypes.STRING,
  //   allowNull: false,
  //   validate: {
  //     isAlphanumeric: true,
  //   },
  // }
});

// Author.associate = (models) => {
//   Author.hasMany(models.Book, { foreignKey: 'Author', as: 'books' });
// };
Author.hasMany(Book);
Book.belongsTo(Author);

// Author.hasMany(Book);
// console.log('Author model:', Author);

module.exports = Author;



