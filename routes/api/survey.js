const router = require("express").Router();
const userController = require("../../client/src/pages/Form.page");



router.route("/Form")
.post(userController.create);




module.exports = router;