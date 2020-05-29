const db = require("../models");

module.exports = {
  gameresults: function (req, res) {
    console.log("usercontroller login", req.body);

    db.scores
      .find(req.body)

      .then((dbModel) => {
        console.log("this is the performance data", dbModel);
        res.send(dbModel);
      })
      .catch((err) => {
        console.log("error" + err);
        res.status(422).json(err);
      });
  },
};

// const db = require("../models");

// module.exports = {

// gameresults: function (req, res) {
// console.log("usercontroller login", req.body)
// const findemail = window.sessionStorage.getItem("email");
// db.performances
//   .find({email:findemail})

//   .then((dbModel) => {
//     console.log("this is the performance data", dbModel)
//     res.send(dbModel)
//   })
//   .catch((err) => {
//     console.log("error" + err);
//     res.status(422).json(err);
//   });

// },

// }
