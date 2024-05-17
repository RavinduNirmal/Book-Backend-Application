const winston = require('winston');
const Book = require('../model/book.model'); 
const Author = require('../model/author.model'); 
const BookLike = require('../model/user_book.model'); 

// Configure winston logger
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.printf(({ timestamp, level, message }) => `${timestamp} [${level}]: ${message}`)
  ),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'likeCount.log' }),
  ],
});

// Function to fetch like count for each author and log the information
const logAuthorLikeReport = async () => {
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

    // Log the report content
    logger.info(`Author Like Count Report:\n${reportContent}`);
    console.log('Report logged successfully');
  } catch (error) {
    logger.error('Error generating or logging report:', error);
    console.error('Error generating or logging report:', error);
  }
};

module.exports = logAuthorLikeReport;