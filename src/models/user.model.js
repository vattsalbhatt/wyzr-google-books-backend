const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    googleId: { type: String, required: true, unique: true },
    imageUrl: { type: String },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("user", userSchema);
