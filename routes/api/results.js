const router = require("express").Router();
const resultsController = require("../../controllers/resultsController");



router.route("/performance")
.get(resultsController.gameresults)

router.route("/survey")
.get(resultsController.surveyresults);

module.exports = router;
