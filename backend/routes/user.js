// On importe les packages
const router = require("express").Router();
const userCtrl = require("../controllers/user");
const checkEmail = require("../middleware/checkEmail");

// On définit nos différentes routes
router.post("/signup", checkEmail, userCtrl.userSignUp);
router.post("/login", userCtrl.userLogin);

module.exports = router;
