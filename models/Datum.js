const mongoose = require("mongoose");

const DatumSchema = new mongoose.Schema({
  starts: {
    type: String,
    required: [true, "please add a start date and time"],
  },
  ends: {
    type: String,
    required: [true, "please add an end date and time"],
  },
});

module.exports = mongoose.model("Datum", DatumSchema);
