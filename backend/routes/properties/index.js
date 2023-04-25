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

// Get all properties
router.get("/", getProperties);

// Get a property
router.get("/:id", getProperty);

// Post a new property
router.post("/", createProperty);

// Delete a property
router.delete("/:id", deleteProperty);

// Update a property
// router.patch('/:id', updateProperty);
router.put("/:id", updateProperty);

module.exports = router;