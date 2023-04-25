const Property = require("../models/propertyModel");
// const agentModel = require("../models/agentModel");
const mongoose = require("mongoose");

// Get all properties
const getProperties = async (req, res) => {
  // const properties = await Property.find({}).sort({createdat: -1});
  const properties = await Property.find({}).populate('agent').sort({createdat: -1});

  res.status(200).json(properties);
}

// Get a single property
const getProperty = async (req, res) => {
  const {id} = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: "No agent with that ID"});
  }

  const property = await Property.findById(id);

  if (!property) {
    return res.status(404).json({error: "No agent with that ID"});
  }

  res.status(200).json(property);
}


// Create a property
const createProperty = async (req, res) => {
  const {propertyType, saleType, address, bedrooms, bathrooms, price} = req.body;

  // Add doc to db  
  try{
    const property = await Property.create({propertyType, saleType, address, bedrooms, bathrooms, price});
    res.status(200).json(property)
  }catch(error){
    // res.status(400).json({error: error.message});
    res.status(400).json({error: error.message});
  }
}

// Delete a property
const deleteProperty = async (req, res) => {
  const {id} = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: "No agent with that ID"});
  }

  const property = await Property.findOneAndDelete({_id: id});

  if (!property) {
    return res.status(404).json({error: "No agent with that ID"});
  }

  res.status(200).json(property);
}


// Update a property
const updateProperty = async (req, res) => {
  const {id} = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: "No agent with that ID"});
  }

  const property = await Property.findOneAndUpdate({_id: id}, {
    ...req.body
  });

  if (!property) {
    return res.status(404).json({error: "No agent with that ID"});
  }

  res.status(200).json(property);
}


module.exports = {
  getProperties,
  getProperty,
  createProperty,
  deleteProperty,
  updateProperty
}