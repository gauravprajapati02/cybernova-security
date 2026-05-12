const mongoose = require("mongoose");

const complaintSchema =
new mongoose.Schema({

  name: String,

  email: String,

  phone: String,

  category: String,

  description: String,

  complaintId: String,

  status: {

    type: String,

    default: "Pending",

  },

}, {

  timestamps: true,

});

module.exports =
mongoose.model(
  "Complaint",
  complaintSchema
);