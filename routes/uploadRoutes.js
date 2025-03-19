const express = require("express");
const { uploadCSV } = require("../services/fileUploadService");

const router = express.Router();

router.post("/csv", async (req, res) => {
  const { filePath } = req.body;

  if (!filePath) {
    return res.status(400).json({ error: "File path is required" });
  }

  try {
    await uploadCSV(filePath);
    res.status(200).json({ message: "File uploaded successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
