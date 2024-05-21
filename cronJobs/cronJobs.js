const winston = require('winston');
const Book = require('../model/book.model'); 
const Author = require('../model/author.model'); 
const BookLike = require('../model/user_book.model'); 
const sequelize = require("../model/sequelize");


// Configure winston logger
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.printf(({ timestamp, level, message }) => `${timestamp} [${level}]: ${message}`)
  ),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: '.likeCount.log' }),
  ],
});

// Function to fetch like count for each author and log the information
const logAuthorLikeReport = async () => {
  try {
    // Fetch like count for each author
    const authors = await BookLike.findAll({
      attributes: [
        'Book.AuthorId',
        [sequelize.fn('COUNT', sequelize.col('BookLike.id')), 'likeCount']
      ],
      group: ["Book.AuthorId"],
      include: {
        model: Book,
        attributes: ['AuthorId'],
        include: {
          model: Author,
          attributes: ['id', 'firstName', 'lastName'],
        },
      },
      raw: true,
    });
    console.log(authors)

    const reportData = authors.map((author) => ({
      authorId:  author['Book.AuthorId'],
      likeCount: author.likeCount,
      authorName: `${author['Book.Author.firstName']} ${author['Book.Author.lastName']}`
    }));

    // Create the report content
    const reportContent = reportData.map(({ authorId, likeCount, authorName }) => `Author ID: ${authorId}, Author Name: ${authorName}, Likes: ${likeCount}`).join('\n');

    // Log the report content
    logger.info(`Author Like Count Report:\n${reportContent}`);
    console.log('Report logged successfully');
  } catch (error) {
    logger.error('Error generating or logging report:', error);
    console.error('Error generating or logging report:', error);
  }
};

module.exports = logAuthorLikeReport;