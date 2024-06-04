const { DataTypes } = require("sequelize");
const sequelize = require("./sequelize");

const Article = sequelize.define("Article", {
  articleNo: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isAlphanumeric: true,
    },
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  publishedDate: {
    type:DataTypes.DATE,
    allowNull:true,
  },
});

module.exports = Article;
