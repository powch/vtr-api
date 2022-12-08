const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  id: {
    type: String,
    required: "User id is required",
  },
  displayName: {
    type: String,
  },
  contributions: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Asset",
    },
  ],
  favorites: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Asset",
    },
  ],
  likes: [
    {
      type: String
    },
  ],
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
