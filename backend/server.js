require("dotenv").config()
const mongoose = require("mongoose");
const express = require("express");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const routes = require("./routes");

const passport = require("./passport/passportConfig");

// TODO: Look into seeding dummy data MongoDB with Mongoose

// Start express
const app = express();

// Middleware
app.use(express.json());

// Express Session
app.use(
  session({
    secret: "very secret this is",
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({ mongoUrl: "mongodb://127.0.0.1:4000" })
  })
);

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

app.use((req, res, next) => {
  // console.log(req.path, req.method);
  next();
});

app.use("/api", routes);

// Connect to DB
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    // Listen for requests
    app.listen(process.env.PORT, () => {
      console.log("Connected to the db and listening on Port", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  })
