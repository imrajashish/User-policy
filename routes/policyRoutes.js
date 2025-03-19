const express = require("express");
const { createPolicy, getPolicy } = require("../controllers/policyController");

const router = express.Router();

//Create Policy
router.post("/", createPolicy);

//Get Policy by ID
router.get("/:id", getPolicy);

module.exports = router;
