const mongoose = require("mongoose");

const Schema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    age: {
      type: Number,
    },
    Phone: {
      type: Number,
    }
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("user", Schema);
module.exports = User;
