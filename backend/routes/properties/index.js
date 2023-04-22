const express = require("express");
// const Agent = require('../../models/agentsModel');
const {
  getProperties,
  getProperty,
  createProperty,
  deleteProperty,
  updateProperty
}= require("../../controllers/propertyController");

const router = express.Router();

// Get all agents
router.get("/", getProperties);

// Get a singlt agent
router.get("/:id", getProperty);

// Post a new agent
router.post("/", createProperty);

// Delete an agent
router.delete("/:id", deleteProperty);

// Update an agent
// router.patch('/:id', updateAgent);
router.put("/:id", updateProperty);

module.exports = router;