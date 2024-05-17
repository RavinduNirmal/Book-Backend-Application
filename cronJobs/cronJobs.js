const cron = require('node-cron');
const nodemailer = require('nodemailer');
const Book = require('../model/book.model'); 
const Author = require('../model/author.model'); 
const BookLike = require('../model//user_book.model'); 

// Configure your email transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
//   auth: {
//     user: 'ravindu.nirmall099@gmail.com',
//     pass: 'your-email-password',
//   },
});

// Function to fetch like count for each author and send email
const sendAuthorLikeReport = async () => {
  try {
    // Fetch like count for each author
    const authors = await Author.findAll({
      include: [
        {
          model: Book,
          include: [
            {
              model: BookLike,
            },
          ],
        },
      ],
    });

    const reportData = authors.map((author) => {
      const likeCount = author.Books.reduce((sum, book) => sum + book.BookLikes.length, 0);
      return { authorName: author.name, likeCount };
    });

    // Create the report content
    const reportContent = reportData.map(({ authorName, likeCount }) => `Author: ${authorName}, Likes: ${likeCount}`).join('\n');

    // Send the email
    const mailOptions = {
      from: 'booking@gmail.com',
      to: 'authour.com',
      subject: 'Author Like Count Report',
      text: reportContent,
    };

    await transporter.sendMail(mailOptions);
    console.log('Report sent successfully');
  } catch (error) {
    console.error('Error generating or sending report:', error);
  }
};

// Schedule the task to run every 5 minutes
cron.schedule('*/5 * * * *', sendAuthorLikeReport);

module.exports = sendAuthorLikeReport;
