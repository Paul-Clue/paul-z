const express = require('express');
const Agent = require('../models/agentsModel');

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
router.post('/', async (req, res) => {
    const {name, age, phoneNumber, numberOfProperties} = req.body;

    try{
        const agent = await Agent.create({name, age, phoneNumber, numberOfProperties});
        res.status(200).json(agent)
    }catch(error){
        res.status(400).json({error: error.message})
    }
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