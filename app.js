const express = require("express");
const bodyParser = require("body-parser");
const cron = require("node-cron");
const dotenv = require("dotenv").config(); 
const AuthorRoute = require("./routes/author.route"); 
const UserRoute = require("./routes/user.route"); 
const BookingRoute = require("./routes/booking.route"); 
const likeHandleRoute = require("./routes/like.route"); 
const logAuthorLikeReport = require("./cronJobs/cronJobs");
const dbConnect = require('./config/dbConnect');

//Initilizing Express App
const app = express();

//Setting Up The PORT
const PORT = process.env.PORT || 4000;

//DB Connection
dbConnect();

//Middlewares
app.use(bodyParser.json()); 

//Setting Up Routings
app.use('/api/like',likeHandleRoute);
app.use('/api/author', AuthorRoute); 
app.use('/api/user', UserRoute); 
app.use('/api/booking', BookingRoute);

//Liked Books for Author Report Generation Shedule
cron.schedule('*/1 * * * *', logAuthorLikeReport);

//Starting The Server
app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});



