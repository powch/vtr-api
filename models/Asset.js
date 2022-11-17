const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");

const AssetSchema = new mongoose.Schema({
  name: {
    type: String,
    required: "name is required",
  },
  link: {
    type: String,
    required: "link is required",
  },
  price: {
    type: {
      type: String,
      enum: ["FREE", "PAID"],
      required: "price type is required",
    },
    value: {
      type: Number,
    },
  },
  tag: [
    {
      type: String,
      enum: ["OVERLAY", "ACCESSORY", "PANEL", "OUTFIT", "OTHER"],
      required: "tags are required",
    },
  ],
  artist: {
    type: String,
    required: "artist is required",
  },
  artistLink: [
    {
      site: {
        type: String,
        enum: ["TWITTER", "KO-FI", "BOOTH"],
        required: "artist links are required",
      },
      link: {
        type: String,
        required: "artist links are required",
      },
    },
  ],
  description: {
    type: String,
  },
  image: {
    type: String,
  },
  status: {
    type: String,
    enum: ["APPROVED", "OPEN", "REVIEW"],
    required: "status is required",
  },
  addedByUser: {
    type: String,
    ref: "User",
    required: "addedByUser is required",
  },
  dateRequested: {
    type: Date,
    default: new Date(),
  },
  dateAdded: {
    type: Date,
    default: new Date(),
  },
  reviewedBy: {
    type: String,
    ref: "User",
  },
  approvedBy: {
    type: String,
    ref: "User",
  },
});

AssetSchema.plugin(mongoosePaginate);

const Asset = mongoose.model("Asset", AssetSchema);

module.exports = Asset;
