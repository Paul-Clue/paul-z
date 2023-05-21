const bcrypt = require("bcryptjs");
const Agent = require("../models/agentModel");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

passport.serializeUser((agent, done) => {
  done(null, agent.id);
});

passport.deserializeUser((id, done) => {
  Agent.findById(id, (err, agent) => {
    done(err, agent);
  });
});

// Local Strategy
passport.use(
  new LocalStrategy({ agentnameField: "email" }, (email, password, done) => {
    // Match Agent
    Agent.findOne({ email: email })
      .then(agent => {
        // Create new Agent
        if (!agent) {
          const newAgent = new Agent({ email, password });
          // Hash password before saving in database
          bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(newAgent.password, salt, (err, hash) => {
              if (err) throw err;
              newAgent.password = hash;
              newAgent
                .save()
                .then(agent => {
                  return done(null, agent);
                })
                .catch(err => {
                  return done(null, false, { message: err });
                });
            });
          });
          // Return other agent
        } else {
          // Match password
          bcrypt.compare(password, agent.password, (err, isMatch) => {
            if (err) throw err;

            if (isMatch) {
              return done(null, agent);
            } else {
              return done(null, false, { message: "Wrong password" });
            }
          });
        }
      })
      .catch(err => {
        return done(null, false, { message: err });
      });
  })
);

module.exports = passport;