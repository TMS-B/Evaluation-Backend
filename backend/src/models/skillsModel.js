import mongoose from "mongoose";

export const skillSchema = new mongoose.Schema(
  {
    titre: { type: String },
    categorie: { type: String },
    niveau: { type: String, enum: ["Débutant", "Intermédiaire", "Expert"] },
    image: {
      public_id: { type: String },
      url: { type: String },
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Skills", skillSchema);
