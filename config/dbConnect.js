const sequelize = require("../model/sequelize"); 

let attempts = 0;

const connectToDatabase = () => {
  sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
    return sequelize.sync();
  }).catch((error) => {
    console.error('Unable to connect to the database: ', error);
    attempts++;
    if (attempts < 20) {
      console.log(`Attempt ${attempts} failed. Retrying...`);
      connectToDatabase();
    } else {
      console.error('Failed to connect after 20 attempts. Giving up.');
    }
  });
};
connectToDatabase();

module.exports = connectToDatabase;