const app = require("express").Router();

const properties = require("./properties");
const agents = require("./agents");
const auth = require("./auth");
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

app.use("/properties", properties);
app.use("/agents", agents);
app.use("/auth", auth);

module.exports = app;
