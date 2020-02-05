const Validator = require("validator");
const isEmpty = require("./is-empty");
const User = require("../models/user");

module.exports = async function validateLoginInput(data) {
  let errors = {};
  //important about empty string.
  data.username = !isEmpty(data.username) ? data.username : "";
  data.password = !isEmpty(data.password) ? data.password : "";

  if (Validator.isEmpty(data.username)) {
    errors.username = "Username field is required";
  } else if (Validator.isEmpty(data.password)) {
    errors.password = "Password cannot be empty";
  } else {
    await User.findOne({
      username: data.username
    }).then(user => {
      if (!user) errors.username = "User not found.";
    });
  }
  return {
    errors,
    valid: isEmpty(errors)
  };
};
