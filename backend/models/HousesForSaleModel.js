const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const housesForSaleSchema = new Schema({
  address: {
    type: String,
    required: true
  },
  numberOfBedrooms: {
    type: Number,
    required: true
  },
  numberOfBathrooms: {
    type: Number,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
}, {timestamps: true});

module.exports = mongoose.model("houseForSale", housesForSaleSchema)