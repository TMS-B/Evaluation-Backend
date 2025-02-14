const mongoose = require("mongoose");

const skillSchema = new mongoose.Schema({
  titre: { type: String },
  catégorie: { type: String },
  niveau: { type: String },
  image : {tupe: String}
});

module.exports = mongoose.model("Skills", skillSchema)