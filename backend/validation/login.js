const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateLoginInput(data) {
  let errors = {};
  //important about empty string.
  data.username= !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";

  if (Validator.isEmpty(data.username)) {
    errors.email = "Username field is required";
  }

  else if (!Validator.isEmail(data.email)) {
    errors.email = "Username is invalid";
  }

  else if (Validator.isEmpty(data.password)) {
    errors.password = "Password cannot be empty";
  }
  else{
    await User.findOne({
      username: req.body.username
    }).then(user => {
      if (!user) errors.username= "User not found.";
    });
  }
  
  return {
    errors,
    isValid: isEmpty(errors)
  };
};
