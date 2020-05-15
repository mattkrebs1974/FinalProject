const router = require("express").Router();
const userController = require("../../controllers/userController");

debugger
//Matches with "api/user" from util/API.js
router.route("/")
.get(userController.findAll)
.post(userController.create);

router.route("/login")
.post(userController.login);



module.exports = router;