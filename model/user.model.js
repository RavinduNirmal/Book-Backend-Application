const { DataTypes } = require('sequelize');
const sequelize = require('./sequelize');

const User = sequelize.define('User', {
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
  password:{
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: {
        args: [8, 128], // Minimum length 8 characters with maximum length 128 characters
        msg: 'Password must be between 8 and 128 characters long',
      },
      isComplexEnough(value) {
        if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/.test(value)) {
          throw new Error('Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character');
        }
      },
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
  lastLoggedIn: {
    type: DataTypes.DATE,
    allowNull: true,

  }, 
} 
);
module.exports = User;


