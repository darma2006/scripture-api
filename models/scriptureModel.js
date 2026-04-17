const mongoose = require("mongoose");

const scriptureSchema = new mongoose.Schema({
  title: { type: String, required: true },
  book: { type: String, required: true },
  chapter: Number,
  verse: String,
  content: String,
  author: String,
  dateAdded: { type: Date, default: Date.now },
  tags: [String]
});

module.exports = mongoose.model("Scripture", scriptureSchema);