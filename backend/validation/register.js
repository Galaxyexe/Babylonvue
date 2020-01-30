const Validator = require("validator");
const isEmpty = require("./is-empty");
const User = require("../models/user"); //uses Mongoose class

module.exports = async function validateRegisterInput(data) {
  let errors = {};
  //important about empty string.
  data.username = !isEmpty(data.username) ? data.username : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.password2 = !isEmpty(data.password2) ? data.password2 : "";
  //data.img =  !isEmpty(data.img) ? data.img : "";
  if (Validator.isEmpty(data.username))
    errors.username = "Name field is required";

  if (
    !Validator.isLength(data.username, {
      min: 2,
      max: 30
    })
  )
    errors.username = "Username must be between 2 and 30 characters.";

  await User.findOne({
    username: data.username
  }).then(user => {
    if (user) errors.username = "Username already exists";
  });

  if (Validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
  }

  if (!Validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }

  await User.findOne({
    email: data.email
  }).then(user => {
    if (user) {
      errors.email = "Email already exists";
    }
  });

  if (Validator.isEmpty(data.password)) {
    errors.password = "Password cannot be empty";
  }

  if (
    !Validator.isLength(data.password, {
      min: 6,
      max: 30
    })
  ) {
    errors.password = "Password must be at least 6 characters";
  }

  if (Validator.isEmpty(data.password2)) {
    errors.password2 = "Password confirmation is required";
  }

  if (!Validator.equals(data.password, data.password2)) {
    errors.password2 = "The passwords don't match please try again.";
  }
  console.log(errors);
  return {
    errors,
    valid: isEmpty(errors)
  };
};
