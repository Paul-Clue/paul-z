const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const agentSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    phoneNumber: {
        type: Number,
        required: true
    },
    numberOfProperties: {
        type: Number,
        required: true
    },
}, {timestamps: true});

module.exports = mongoose.model('agent', agentSchema)