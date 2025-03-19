require("dotenv").config();

const express = require("express");
const { monitorCPU } = require("./services/cpuMonitorService");
const policyRoutes = require("./routes/policyRoutes");
const agentRoutes = require("./routes/agentRoutes");
const userRoutes = require("./routes/userRoutes");
const { scheduleMessage } = require("./services/cronJob");
const messageRoutes = require("./routes/messageRoutes");
const uploadRoutes = require("./routes/uploadRoutes");
const connectDB = require("./utils/db");

const app = express();

app.use(express.json());

app.use("/api/policy", policyRoutes);
app.use("/api/agent", agentRoutes);
app.use("/api/user", userRoutes);
app.use("/api/message", messageRoutes);
app.use("/api/upload", uploadRoutes);
monitorCPU();
scheduleMessage("Weekly Reminder", 5, { hour: 14, minute: 30 });

connectDB();

app.listen(3000, () => console.log("Server running on port 3000"));
