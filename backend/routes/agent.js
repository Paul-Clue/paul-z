const express = require('express');
const Agent = require('../models/agentsModel');
const {
    createAgent,
    getAgents,
    getAgent,
    deleteAgent,
    updateAgent
}= require('../controllers/agentControllers');

const router = express.Router();

// Get all agents
router.get('/', getAgents);

// Get a singlt agent
router.get('/:id', getAgent);

// Post a new agent
router.post('/', createAgent);

// Delete an agent
router.delete('/:id', deleteAgent);

// Update an agent
router.patch('/:id', updateAgent);

module.exports = router;