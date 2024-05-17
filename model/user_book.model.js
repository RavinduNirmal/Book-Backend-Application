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

