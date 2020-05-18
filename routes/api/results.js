const router = require("express").Router();
const resultsController = require("../../controllers/resultsController");

debugger;

router.route("/performance")
.get(resultsController.findAll)

router.route("/survey")
.get(resultsController.findAll);

module.exports = router;
