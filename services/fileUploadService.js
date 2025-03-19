const fs = require("fs");
const path = require("path");
const csv = require("csv-parser");
const User = require("../models/User"); // Example for User collection

const uploadCSV = async (filePath) => {
  try {
    const absolutePath = path.resolve(filePath);

    if (!fs.existsSync(absolutePath)) {
      throw new Error(`File not found: ${absolutePath}`);
    }

    const results = [];
    fs.createReadStream(absolutePath)
      .pipe(csv())
      .on("data", (data) => {
        results.push(data);
      })
      .on("end", async () => {
        console.log(` ${results.length} records found`);
        // Insert into MongoDB
        await User.insertMany(results);
        console.log(" Data uploaded successfully");
      });
  } catch (error) {
    console.error(` Error uploading CSV: ${error.message}`);
  }
};

module.exports = { uploadCSV };
