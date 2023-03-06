const express = require('express');

// Start express
const app = express();

app.get('/', (req, res) => {
    res.json({messg: 'Testing!!'})
});

// Listen for requests
app.listen(4000, () => {
    console.log('Listening on Port 4000!');
});