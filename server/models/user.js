/* 
  File name: user.js
  Author's name: Phuong Linh Pham
  Student ID: 300923800
  Web App name: My Favourite Books
*/

// require modules for our User Model
let mongoose = require("mongoose");
let passportLocalMongoose = require("passport-local-mongoose");

let userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      default: "",
      trim: true,
      required: "*Username is required"
    },
    email: {
      type: String,
      default: "",
      trim: true,
      required: "*Email is required"
    },
    displayName: {
      type: String,
      default: "",
      trim: true,
      required: "*Display Name is required"
    },
    created: {
      type: Date,
      default: Date.now
    },
    update: {
      type: Date,
      default: Date.now
    }
  },
  {
    collection: "users"
  }
);

// configure options for UserSchema

let options = ({
    missingPasswordError: "*Wrong / Missing Password"
});

userSchema.plugin(passportLocalMongoose, options);

module.exports.User = mongoose.model('User',userSchema); 