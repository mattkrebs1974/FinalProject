const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();



const { PORT = 3001, NODE_ENV = "development" } = process.env;

const IN_PROD = NODE_ENV === "production";

// Requiring our Models folder for syncing
var db = require("./models")

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//use the following code to serve images, CSS files, and JavaScript files in a directory named public:
// app.use(express.static(__dirname + "/public"));
app.use(express.static("public"));

//api routes to get for the data to flow from/to database



db.sequelize.authenticate()
    .then(() => console.log("you're are connected to the database"))
    .catch(err => console.log("you made an error" + err));

// routes

// require("./routes/apiRoutes.js")(app);
require("./routes/htmlRoutes.js")(app)
var syncOptions = { force: false };


// require("./routes/apiRoutes")(app);
// require("./routes/htmlRoutes")(app);

// require("./routes/scores-api-routes")(app);

// var syncOptions = { force: false };

// ??????
// if (process.env.NODE_ENV === "test") {
//     syncOptions.force = true;
// }



db.sequelize.sync().then(function () {
    app.listen(PORT, function () {
        console.log("App listening on PORT " + PORT);
    });
});