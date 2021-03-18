const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");

const userSchema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  confession: { type: Array },
  date: { type: Date, default: Date.now }
});

userSchema.pre("save", function(next) {
  if(!this.isModified("password"))
  return next();
  bcrypt.hash (
    this.password, 10, (
    err, passwordHash
    ) => {
        if(err)
        return next(err);
    this.password = passwordHash;
    next();
  });
});

userSchema.methods.comparePassword = function(password, cb) {
  bcrypt.compare(password,this.password, (err, isMatch) => {
    if(err)
        return cb(err);
    else {
        if(!isMatch)
        return cb(null, isMatch);
        return cb(null, this);
    }
  });
};

const User = mongoose.model("User", userSchema);

module.exports = User;
