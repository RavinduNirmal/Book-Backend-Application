const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv").config(); 
const sequelize = require("./model/sequelize"); 
const AuthorRoute = require("./routes/author.route"); 
const UserRoute = require("./routes/user.route"); 
const BookingRoute = require("./routes/booking.route"); 
const likeHandleRoute = require("./routes/like.route"); 
// const sendAuthorLikeReport = require('./cronJobs');

const app = express();
const PORT = process.env.PORT || 4000;

sequelize.authenticate().then(() => {
   console.log('Connection has been established successfully.');
   return sequelize.sync();
}).catch((error) => {
   console.error('Unable to connect to the database: ', error);
});

app.use(bodyParser.json()); 
app.use('/api/like',likeHandleRoute);
app.use('/api/author', AuthorRoute); 
app.use('/api/user', UserRoute); 
app.use('/api/booking', BookingRoute);

// //Report Generation in every 5min
// sendAuthorLikeReport();

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});



