const mongoose = require("mongoose");

const transaction = new mongoose.Schema({
  sequence: {
    type: Number,
    required: true,
  },

  transactionDate: {
    type: Date,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  transactionType: {
    type: String,
    default: "credit",
  },
  runningBalance: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("transactions", transaction);
