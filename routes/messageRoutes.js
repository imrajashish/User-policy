const express = require("express");
const { scheduleMessage } = require("../services/messageService");
const router = express.Router();

router.post("/schedule", async (req, res) => {
  const { message, day, time } = req.body;
  if (!message || !day || !time) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  scheduleMessage(message, day, time);
  res.status(200).json({ message: "Message scheduled successfully" });
});

module.exports = router;
