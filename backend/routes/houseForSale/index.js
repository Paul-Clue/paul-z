const express = require("express");
// const Agent = require('../../models/agentsModel');
const {
  getHousesForSale,
  getHouseForSale,
  createHouseForSale,
  deleteHouseForSale,
  updateHouseForSale
}= require("../../controllers/housesForSaleController");

const router = express.Router();

// Get all agents
router.get("/", getHousesForSale);

// Get a singlt agent
router.get("/:id", getHouseForSale);

// Post a new agent
router.post("/", createHouseForSale);

// Delete an agent
router.delete("/:id", deleteHouseForSale);

// Update an agent
// router.patch('/:id', updateAgent);
router.put("/:id", updateHouseForSale);

module.exports = router;