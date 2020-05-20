const path = require("path");
const router = require("express").Router();
const userRoutes = require("./user");
const resultsRoutes = require("./results");

router.use("/users",userRoutes);
router.use("/data", resultsRoutes);


// If no API routes are hit, send the React app
router.use((req, res) =>
  res.sendFile(path.join(__dirname,"../../client/build/index.html"))
);

module.exports = router; 