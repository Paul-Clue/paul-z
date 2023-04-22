const mongoose = require("mongoose");

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
}, {timestamps: true});

module.exports = mongoose.model("property", propertySchema)