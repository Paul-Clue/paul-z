const app = require("express").Router();

const housesForSale = require("./houseForSale");
// const users = require('./users')

// Middleware example
app.get("*", (req, res, next) => {
  // Run their authentication
  // console.log(req.headers)
  // const token = req.headers['Authentication'];
  // const result = validateToken(token)
  // Verify result is valid before allowing the user to move on to executing the endpoint
  next();
})

app.use("/housesForSale", housesForSale)

module.exports = app;
