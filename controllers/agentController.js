const Agent = require("../models/Agent");

//Create Agent
const createAgent = async (req, res) => {
  try {
    const agent = new Agent(req.body);
    await agent.save();
    res.status(201).json(agent);
  } catch (error) {
    res.status(500).json({ message: "Error creating agent", error });
  }
};

// Get All Agents
const getAgents = async (req, res) => {
  try {
    const agents = await Agent.find();
    res.status(200).json(agents);
  } catch (error) {
    res.status(500).json({ message: "Error fetching agents", error });
  }
};

module.exports = { createAgent, getAgents };
