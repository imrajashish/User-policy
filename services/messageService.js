const cron = require('node-cron');
const Message = require('../models/Message');

const scheduleMessage = (message, day, time) => {
  const [hour, minute] = time.split(':');
  const cronTime = `${minute} ${hour} * * ${day}`;

  cron.schedule(cronTime, async () => {
    try {
      const newMessage = new Message({ message, createdAt: new Date() });
      await newMessage.save();
      console.log(`Message saved: ${message}`);
    } catch (error) {
      console.error(`Failed to save message: ${error.message}`);
    }
  });
};

module.exports = { scheduleMessage };
