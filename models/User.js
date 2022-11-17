const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  id: {
    type: String,
    required: "User id is required",
  },
  displayName: {
    type: String,
    required: "display name is required",
  },
  contributions: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Asset",
    },
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Gear",
    },
  ],
  favorites: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Asset",
    },
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Gear",
    },
  ],
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
