const Agent = require("../models/agentModel");
const mongoose = require("mongoose");

// Get all agents
const getAgents = async (req, res) => {
  const agents = await Agent.find({}).sort({createdat: -1});

  res.status(200).json(agents);
}

// Get a single agent
const getAgent = async (req, res) => {
  const {id} = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: "No agent with that ID"});
  }

  const agent = await Agent.findById(id);

  if (!agent) {
    return res.status(404).json({error: "No agent with that ID"});
  }

  res.status(200).json(agent);
}


// Create an agent
const createAgent = async (req, res) => {
  const {name, age, phoneNumber, numberOfProperties} = req.body;

  // Add doc to db  
  try{
    const agent = await Agent.create({name, age, phoneNumber, numberOfProperties});
    res.status(200).json(agent)
  }catch(error){
    res.status(400).json({error: error.message})
  }
}

// Delete an agent
const deleteAgent = async (req, res) => {
  const {id} = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: "No agent with that ID"});
  }

  const agent = await Agent.findOneAndDelete({_id: id});

  if (!agent) {
    return res.status(404).json({error: "No agent with that ID"});
  }

  res.status(200).json(agent);
}


// Update an agent
const updateAgent = async (req, res) => {
  const {id} = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: "No agent with that ID"});
  }

  const agent = await Agent.findOneAndUpdate({_id: id}, {
    ...req.body
  });

  if (!agent) {
    return res.status(404).json({error: "No agent with that ID"});
  }

  res.status(200).json(agent);
}


module.exports = {
  getAgents,
  getAgent,
  createAgent,
  deleteAgent,
  updateAgent
}