const HouseForSale = require('../models/HousesForSaleModel');
const mongoose = require('mongoose');

// Get all agents
const getHousesForSale = async (req, res) => {
  const housesForSale = await HouseForSale.find({}).sort({createdat: -1});

  res.status(200).json(housesForSale);
}

// Get a single agent
const getHouseForSale = async (req, res) => {
  const {id} = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: "No agent with that ID"});
  }

  const houseForSale = await HouseForSale.findById(id);

  if (!houseForSale) {
    return res.status(404).json({error: "No agent with that ID"});
  }

  res.status(200).json(houseForSale);
}


// Create a house that's for sale
const createHouseForSale = async (req, res) => {
  const {address, numberOfBedrooms, numberOfBathrooms, price} = req.body;

    // Add doc to db  
    try{
        const houseForSale = await HouseForSale.create({address, numberOfBedrooms, numberOfBathrooms, price});
        res.status(200).json(houseForSale)
    }catch(error){
        res.status(400).json({error: error.message})
    }
}

// Delete a house that's for sale
const deleteHouseForSale = async (req, res) => {
  const {id} = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No agent with that ID'});
  }

  const houseForSale = await HouseForSale.findOneAndDelete({_id: id});

  if (!houseForSale) {
    return res.status(404).json({error: "No agent with that ID"});
  }

  res.status(200).json(houseForSale);
}


// Update an agent
const updateHouseForSale = async (req, res) => {
  const {id} = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No agent with that ID'});
  }

  const houseForSale = await HouseForSale.findOneAndUpdate({_id: id}, {
    ...req.body
  });

  if (!houseForSale) {
    return res.status(404).json({error: "No agent with that ID"});
  }

  res.status(200).json(houseForSale);
}


module.exports = {
  getHousesForSale,
  getHouseForSale,
  createHouseForSale,
  deleteHouseForSale,
  updateHouseForSale
}