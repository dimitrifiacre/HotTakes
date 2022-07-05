// On importe les packages
const router = require("express").Router();
const userCtrl = require("../controllers/user");

// On définit nos différentes routes
router.post("/signup", userCtrl.userSignUp);
router.post("/login", userCtrl.userLogin);

module.exports = router;
