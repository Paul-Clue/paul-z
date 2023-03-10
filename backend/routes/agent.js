const express = require('express');
const router = express.Router();

// Get all agents
router.get('/', (req, res) => {
    res.json({messg: 'GET all agents'});
});

// Get a singlt agent
router.get('/:id', (req, res) => {
    res.json({mssg: 'Get a single agent'})
});

// Post a new agent
router.post('/', (req, res) => {
    res.json({mssg: 'POST a new agent'});
});
// Delete an agent
router.delete('/:id', (req, res) => {
    res.json({mssg: 'DELETE an agent'});
});

// Update an agent
router.patch('/:id', (req, res) => {
    res.json({mssg: 'UPDATE an agent'});
});

module.exports = router;