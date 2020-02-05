var express = require("express");
var User = require("../models/user"); //uses Mongoose class

const router = express.Router(); //calls constructor

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const validateRegisterInput = require("../validation/register");
const validateLoginInput = require("../validation/login");

router.get("/test", (req, res) => res.send("User Works"));

router.post("/register", async (req, res) => {
  const { errors, valid } = await validateRegisterInput(req.body);
  if (!valid) {
    return res.status(400).json({
      success: false,
      status: "Invalid post body.",
      details: errors
    });
  }
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password
  });
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(newUser.password, salt, (err, hash) => {
      if (err) {
        return res.json({
          success: false,
          status: "Failed to generate password.",
          details: err
        });
      }
      newUser.password = hash;
      newUser.save(function(err) {
        if (err) {
          return res.status(500).json({
            success: false,
            status: "Failed to save user.",
            details: err.message
          });
        }
      });
      return res.json({
        success: true,
        status: "User successfully created!"
      });
      //add verification later
    });
  });
});

router.post("/login", async (req, res) => {
  const password = req.body.password;

  //Find User by email
  const { errors, valid } = await validateLoginInput(req.body);
  //check validation
  if (!valid) {
    return res.status(400).json({
      success: false,
      simple: "Invalid login information.",
      details: errors
    });
  }

  User.findOne({
    username: req.body.username
  })
    .then(user => {
      //Check password
      bcrypt.compare(password, user.password).then(isMatch => {
        if (isMatch) {
          //User matched
          const payload = {
            id: user.id,
            username: user.username,
            email: user.email
          }; // create jwt payload
          //Sign token
          jwt.sign(
            payload,
            "78:5f:4d:4e:a8:6a", //HIDE LATER
            {
              expiresIn: "1d"
            },
            (err, token) => {
              if (err)
                res.status(500).json({
                  success: false,
                  simple: "unable to generate auth token.",
                  details: err
                });
              else
                res.json({
                  success: true,
                  token: "Bearer " + token
                });
            }
          );
        } else {
          errors.password = "Password Incorrect.";
          return res.status(400).json({
            success: false,
            simple: "Invalid body.",
            details: errors
          });
        }
      });
    })
    .catch(e => console.error(e));
});

module.exports = router;
/*
module.exports = function(passport) {
  //now puts objects on handle
  handle.get("/", function(req, res, next) {
    var date = new Date();
    var currentMinute = date.getMinutes();
    var currentHour = date.getHours();
    console.log(currentHour);
    res.render("index", { min: currentMinute, hr: currentHour }); //invoking 'pug' renderer. by putting comma you can inject anything into pug. left of : is key
  });
  handle.post("/createUser", function(req, res, next) {
    //gets the posted data from the body bodyParser
    //creates a database record with that data
    var newUser = User({
      username: req.body.uname,
      password: req.body.pword,
      firstName: req.body.fname,
      lastName: req.body.lname
    }); //uses required module
    newUser.save(function(err) {
      if (err) {
        console.log(err);
        res.send("There was an unknown error submitting your data.");
      } else {
        res.send(req.body.fname + " has been added to the database.");
        //res.redirect('/admin'); //unsafe
      }
    }); //saves to database
  });
  handle.get("/login", function(req, res) {
    console.log("Heree");
    res.render("login");
  });
  handle.post("/login", function(req, res) {
    var username = req.body.uname;
    var password = req.body.pword;
    //checks database for authentication purposes
    User.findOne({ username: username }, function(err, user) {
      if (err) res.send("I don't know what happened.");
      if (!user) res.send("You don't exist."); //you can't find user in database
      if (user && user.password != password) res.send("Incorrect password");
      if (user && user.password == password)
        res.render("admin", { name: user.firstName });
    });
  }); //can use login twice
  handle.get("/auth/facebook", passport.authenticate("facebook")); //.authenticate checks passport object to see if facebook strategy is configured
  handle.get(
    "/auth/facebook/callback",
    passport.authenticate("facebook", {
      successRedirect: "/success",
      failureRedirect: "/login"
    })
  );
  handle.get("success", function(req, res) {
    res.send("You succesfully logged in with Facebook");
  });

  return handle;
};
//module.exports=handle;//takes handle and exports it so the code here is available
*/
