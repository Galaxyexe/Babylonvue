var mongoose = require("mongoose");
module.exports = mongoose.model("User", {
  id: String, //can creates multiple users with this. leave out id when using
  username: String,
  password: String,
  password2: String,
  email: String,
  img: { data: Buffer, contentType: String }
}); //need available in root handler. generates mongoose model (list of what properties are of object)
