// On importe les packages
const http = require("http");
const app = require("./app");

// On démarre le serveur avec la méthode createServer
const server = http.createServer(app);

// On définit le port et on écoute la connexion
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Serveur lancé sur le port ${port}`);
});
