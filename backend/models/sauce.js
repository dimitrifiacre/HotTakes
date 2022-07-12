// On importe le package
const mongoose = require("mongoose");

// On crée le modèle sauce
const SauceSchema = mongoose.Schema({
  userId: { type: String, required: true },
  name: { type: String, require: true },
  manufacturer: { type: String, require: true },
  description: { type: String, require: true },
  mainPepper: { type: String, require: true },
  imageUrl: { type: String, require: true },
  heat: { type: Number, require: true },
  likes: { type: Number, require: true, default: 0 },
  dislikes: { type: Number, require: true, default: 0 },
  usersLiked: { type: Array },
  usersDisliked: { type: Array },
});

module.exports = mongoose.model("Sauce", SauceSchema);
