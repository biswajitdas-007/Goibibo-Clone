const mongoose = require("mongoose");

const busschema = new mongoose.Schema(
  {
    company: { type: String, required: true },
    type: [{ type: String, requitred: true }],
    source_t: { type: String, requitred: true },
    source_l: { type: String, requitred: true },
    destination_t: { type: String, requitred: true },
    destination_l: { type: String, requitred: true },
    duration: { type: String, requitred: true },
    boarding_point: [{ type: Object, requitred: true }],
    dropping_point: [{ type: Object, requitred: true }],
    seats: [{ type: String, requitred: true }],
    rating: { type: Number, required: true },
    popular: [{ type: String, required: true }],
    amenities: [{ type: String, required: true }],
    policies: [{ type: String, required: true }],
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Bus = mongoose.model("buses", busschema);

module.exports = Bus;
