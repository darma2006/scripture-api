const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema({
  content: String,
  scriptureId: mongoose.Schema.Types.ObjectId,
  userId: mongoose.Schema.Types.ObjectId,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Note", noteSchema);