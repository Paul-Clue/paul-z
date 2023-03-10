require('dotenv').config()
const express = require('express');
const agentRoutes = require('./routes/agent');

// Start express
const app = express();

// Middleware
app.use(express.json());

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

// Routes
// app.get('/', (req, res) => {
//     res.json({messg: 'Testing!!'})
// });

app.use('/api/agents', agentRoutes);

// Listen for requests
app.listen(process.env.PORT, () => {
    console.log('Listening on Port', process.env.PORT);
});