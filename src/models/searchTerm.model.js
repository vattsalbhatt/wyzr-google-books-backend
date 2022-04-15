const mongoose = require("mongoose");

const searchTermSchema = new mongoose.Schema({
  searchKey: { type: String },
});

module.exports = mongoose.model("searchTerm", searchTermSchema);
