const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const movieSchema = new Schema({
  name: String,
  genre: String,
  rate: Number,
  watched: Boolean,
  directorId: Schema.Types.ObjectId,
});

module.exports = mongoose.model("Movie", movieSchema);
