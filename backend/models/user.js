// On importe les packages
const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

// On crée le modèle user
const userSchema = mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, require: true },
});

// On applique le package unique-validator sur notre schema
userSchema.plugin(uniqueValidator);

module.exports = mongoose.model("User", userSchema);
