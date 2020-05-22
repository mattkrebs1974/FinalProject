const router = require("express").Router();
const resultsController = require("../../controllers/resultsController");



router.route("/performance")

.post(resultsController.gameresults)

router.route("/survey")
.post(resultsController.surveyresults)
.get(resultsController.surveyresults);


module.exports = router;
