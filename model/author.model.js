const { DataTypes } = require('sequelize');
const sequelize = require('./sequelize');  

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
  },
  contactNo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Author;



