const express = require("express");
const mongoose = require("mongoose");

const routes = require("./routes");

const app = express();
const PORT = process.env.PORT || 3002;
const bodyParser = require("body-parser");

// const path = require("path");


require ("dotenv").config();

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());


//turn on once I have the router. 

// app.use(routes);

// Connect to the mongoose database
var MONGODB_URI = process.env.MONGODB_URI || 
// "mongodb://wednesday:wednesday1@ds047612.mlab.com:47612/heroku_67183r50";
"mongodb://localhost/braingauge";
mongoose.connect(MONGODB_URI, {userMongoClient: true});



    app.listen(PORT, function () {
        console.log("App listening on PORT " + PORT);
    });
