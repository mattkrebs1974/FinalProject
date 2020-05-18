const path = require("path");
const router = require("express").Router();
const userRoutes = require("./user");
const Score = require("../../models/score")

router.use("/users", userRoutes);

router.post("/score", function (req, res) {
  console.log(Score);
  console.log(req.body)
  Score.create(req.body, function (err, data) {
    if (err) {
      console.log(err);
    } else {
      console.log(data);
      res.send("score recieved")
    }
  })
})
const surveyRoutes = require("./survey")
const gameRoutes = require("./game")
const resultsRoutes = require("./results")

router.use("/users",userRoutes);
router.use("/data",resultsRoutes);


// If no API routes are hit, send the React app
router.use((req, res) =>
  res.sendFile(path.join(__dirname, "../../client/build/index.html"))
);



module.exports = router; 