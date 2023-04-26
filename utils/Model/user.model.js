const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  name: String,
  phoneNumber: String,
  email: String,
  password: String,
  country: String,
});

module.exports = mongoose.model("User", UserSchema);
