const db = require("../models");

module.exports = {
    Gameresults: function (req, res) {
      console.log("working");
      console.log(req.body);
      let scores = req.body;
      db.scores
      .create(scores)
      .then((dbModel)=>{
         res.json(dbModel);
      }).catch((err)=>{
       res.status(422).json(err);
      });
    }

};