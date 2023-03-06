require('dotenv').config()
const express = require('express');

// Start express
const app = express();

app.get('/', (req, res) => {
    res.json({messg: 'Testing!!'})
});

// Listen for requests
app.listen(process.env.PORT, () => {
    console.log('Listening on Port', process.env.PORT);
});