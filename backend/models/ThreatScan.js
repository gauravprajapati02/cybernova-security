const mongoose =
require("mongoose");

const threatSchema =
new mongoose.Schema({

  userId: String,

  email: String,

  input: String,

  level: String,

  category: String,

  confidence: Number,

  summary: String,

  recommendations: [String],

  createdAt: {

    type: Date,

    default: Date.now,

  },

});

module.exports =
mongoose.model(
  "ThreatScan",
  threatSchema
);