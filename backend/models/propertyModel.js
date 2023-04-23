const mongoose = require("mongoose");
const agentModel = require("./agentModel");

const Schema = mongoose.Schema;
const propertySchema = new Schema({
  propertyType: {
    type: String,
    required: true
  },
  saleType: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  bedrooms: {
    type: String,
    required: true
  },
  bathrooms: {
    type: Number,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  agent: {
    type: mongoose.Schema.Types.ObjectId,
    ref: agentModel,
    required: true
  }
}, {timestamps: true});

module.exports = mongoose.model("property", propertySchema)