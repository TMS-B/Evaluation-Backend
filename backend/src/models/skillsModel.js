const mongoose = require("mongoose");

const skillSchema = new mongoose.Schema({
  titre: { type: String },
  catégorie: { type: String },
  niveau: { type: String, enum: ["débutant", "intermédiaire", "expert"] },
  image: {
    public_id: { type: String },
    url: { type: String}
  },
});

module.exports = mongoose.model("Skills", skillSchema);
