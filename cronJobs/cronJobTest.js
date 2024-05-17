const cron = require('node-cron');
const winston = require('winston');

const logger = winston.createLogger({
  transports: [
    new winston.transports.Console(), 
    new winston.transports.File({ filename: 'cron.log' }) 
  ],
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.printf(({ timestamp, message }) => `[${timestamp}] ${message}`)
  )
});

const logMessage = () => {
  const currentDate = new Date();
  logger.info(`Logging a message from the cron job.`);
};

cron.schedule('*/1 * * * *', logMessage);

module.exports = logMessage;
