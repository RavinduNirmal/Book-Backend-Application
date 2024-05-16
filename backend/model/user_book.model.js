// const { DataTypes } = require('sequelize');
// const sequelize = require('./sequelize');

// const BookLike = sequelize.define('User_Book', {
//   userId: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   bookId: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   LikedBookCount: {
//     type: DataTypes.STRING,
//     validate: {
//       isAlphanumeric: true, 
//     } 
//   },
// });

// module.exports = BookLike;



const { DataTypes } = require('sequelize');
const sequelize = require('./sequelize'); 

const BookLike = sequelize.define('BookLike', {
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  bookId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  indexes: [
    {
      unique: true,
      fields: ['userId', 'bookId']
    }
  ]
});

module.exports = BookLike;

