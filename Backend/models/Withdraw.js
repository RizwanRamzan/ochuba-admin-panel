const mongoose = require("mongoose");

const withdrawSchema = new mongoose.Schema({
  IBAN: {
    type: String,
    default: "",
  },
  User: {
    id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    email: String
  },
  Date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Withdraw", withdrawSchema);