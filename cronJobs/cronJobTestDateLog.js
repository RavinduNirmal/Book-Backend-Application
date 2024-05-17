const cron = require('node-cron');

const logMessage = () => {
  const currentDate = new Date();
  console.log(`[${currentDate.toLocaleString()}] Logging a message from the cron job.`);
};

cron.schedule('*/1 * * * *', logMessage);

module.exports = logMessage;
