const { Worker, isMainThread, parentPort } = require("worker_threads");
const csv = require("csv-parser");
const fs = require("fs");
const User = require("../models/User");

fs.createReadStream(workerData.filePath)
  .pipe(csv())
  .on("data", async (data) => {
    await User.create(data);
  })
  .on("end", () => {
    parentPort.postMessage("Upload complete");
  });
