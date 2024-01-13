const mongoose = require("mongoose");

const userDetailsSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: [true, "Please enter the name"],
    },
    email: {
      type: String,
      unique: true,
      trim: true,
      required: [true, "Please enter the email"],
    },
    username: {
      type: String,
      trim: true,
      required: [true, "Please enter the username"],
    },
    password: {
      type: String,
      trim: true,
      required: [true, "Please enter the password"],
    },
    role: {
      type: String,
      required: [true, "Please select the role"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("UserModel", userDetailsSchema);
