const {DataTypes} = require('sequelize');
const sequelize = require('./sequelize');

const Product = sequelize.define('Product',{
    productName:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    productId:{
        type:DataTypes.STRING,
        allowNull:false,
        validate:{
            isAlphanumeric:true,
        }
    },
    category:{
       type:DataTypes.STRING,
       allowNull:false,
    },
    price:{
        type:DataTypes.STRING,
        allowNull:false,
    },    
});

module.exports = Product;