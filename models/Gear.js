const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");

const GearSchema = new mongoose.Schema({
  name: {
    type: String,
    required: "name is required",
  },
  link: {
    type: String,
    required: "link is required",
  },
  price: {
    type: Number,
  },
  tag: [
    {
      type: String,
      enum: ["AUDIO", "OTHER"],
      required: "tags are required",
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

GearSchema.plugin(mongoosePaginate);

const Gear = mongoose.model("Gear", GearSchema);

module.exports = Gear;
