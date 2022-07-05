// On importe les packages
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");
require("dotenv").config();

// On importe les routes
const userRoutes = require("./routes/user");
const sauceRoutes = require("./routes/sauce");

// On se connecte à MongoDB grâce à mongoose
mongoose
  .connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connexion à MongoDB réussie"))
  .catch(() => console.log("Connexion à MongoDB échouée"));

// CORS pour autoriser les requêtes et éviter les erreurs
app.use(cors());

// On analyse et transforme le corp des requêtes en json
app.use(express.json());

// On utilise nos routes
app.use("/api/auth", userRoutes);
app.use("/api/sauces", sauceRoutes);
app.use("/images", express.static(path.join(__dirname, "images")));

module.exports = app;
