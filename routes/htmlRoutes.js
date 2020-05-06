var path = require("path");

module.exports = function (app) {

    app.get("/", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/loginform.html"));
    });

    // app.get("/playersform", (req, res) => {
    //     res.sendFile(path.join(__dirname, "../public/playersform.html"));

    // });
    // app.get("/teamsform", (req, res) => {
    //     res.sendFile(path.join(__dirname, "../public/teamsform.html"))
    // });



};