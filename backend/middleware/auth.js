// On importe les packages
const jwt = require("jsonwebtoken");
require("dotenv").config();

// On décode le token pour vérifier que la requête est authentifiée
module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decodedToken = jwt.verify(token, process.env.SECRET_TOKEN);
    const userId = decodedToken.userId;
    req.auth = { userId };
    next();
  } catch (error) {
    res.status(401).json({ error: "Requête non authentifiée" });
  }
};
