const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");

//imports different router/handler files
const user = require("./routes/User.js");

//setup bodyparser and express
const app = express();
app.use(bodyParser.json());

// Connect to MongoDB
var mongoDB = "mongodb://127.0.0.1/custom_database";
mongoose.connect(mongoDB, { useNewUrlParser: true });
mongoose
  .connect(mongoDB, { useNewUrlParser: true })
  .then(() => console.log("Mongodb Connected"))
  .catch(err => console.log(err));
//dodge deprication warnings
mongoose
  .set("useNewUrlParser", true)
  .set("useFindAndModify", false)
  .set("useCreateIndex", true);

//Passport Config
app.use(passport.initialize());

//map router files to respective urls

app.use("/user", user);

//set port and listen on it
const port = process.env.BEPORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
