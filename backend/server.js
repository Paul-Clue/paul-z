require('dotenv').config()
const mongoose = require('mongoose');
const express = require('express');
const routes = require('./routes');

// TODO: Look into seeding dummy data MongoDB with Mongoose

// Start express
const app = express();

// Middleware
app.use(express.json());

app.use((req, res, next) => {
    // console.log(req.path, req.method);
    next();
});

app.use('/api', routes);

// Connect to DB
mongoose.connect(process.env.MONGO_URI)
.then(() => {
    // Listen for requests
    app.listen(process.env.PORT, () => {
    console.log('Connected to the db and listening on Port', process.env.PORT);
});
})
.catch((error) => {
    console.log(error);
})
