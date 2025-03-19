const Policy = require("../models/Policy");

// Create Policy
const createPolicy = async (req, res) => {
  try {
    const policy = new Policy(req.body);
    await policy.save();
    res.status(201).json(policy);
  } catch (error) {
    res.status(500).json({ message: "Error creating policy", error });
  }
};

//Get Policy by ID
const getPolicy = async (req, res) => {
  try {
    const policy = await Policy.findById(req.params.id);
    if (!policy)
      return res.status(404).json({ message: "Policy not found" });
    res.status(200).json(policy);
  } catch (error) {
    res.status(500).json({ message: "Error fetching policy", error });
  }
};

module.exports = { createPolicy, getPolicy };
