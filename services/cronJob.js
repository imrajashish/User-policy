const cron = require("node-cron");

const scheduleMessage = (message, day, { hour, minute }) => {
  const cronTime = `${minute} ${hour} * * ${day}`;

  cron.schedule(cronTime, () => {
    console.log(
      `Message: ${message} scheduled on day ${day} at ${hour}:${minute}`
    );
    // Add logic to insert into DB if needed
  });

  console.log(`Cron Job Scheduled: ${cronTime}`);
};

module.exports = { scheduleMessage };
