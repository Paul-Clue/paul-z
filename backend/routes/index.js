const app = require("express").Router();

// const logger = require("morgan");
const passport = require("passport");
// const session = require("express-session");
// const MongoStore = require("connect-mongo");

const properties = require("./properties");
const agents = require("./agents");
const auth = require("./auth");

// const users = require('./users')

// Middleware example
// app.use(express.static(path.join(__dirname, "public")));
// app.use(session({
//   secret: 'keyboard cat',
//   resave: false,
//   saveUninitialized: false,
//   store: MongoStore.create({ mongoUrl: 'mongodb://localhost:27017/' })
// }));
app.use(passport.authenticate("session"));

app.get("*", (req, res, next) => {
  // Run their authentication
  // console.log(req.headers)
  // const token = req.headers['Authentication'];
  // const result = validateToken(token)
  // Verify result is valid before allowing the user to move on to executing the endpoint
  next();
});

app.post(
  "/api/auth/login/password",
  passport.authenticate("local-signup", { session: false }),
  (req, res) => {
    // sign up
    const use = res.json({
      user: req.user,
    });
    console.log(use);
  }
);

app.use("/properties", properties);
app.use("/agents", agents);
app.use("/auth", auth);

module.exports = app;
