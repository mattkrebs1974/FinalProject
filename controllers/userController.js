const db = require("../models")
const md5 = require("md5");

module.exports = {

findAll: function (req,res){

console.log("working")
},

create: function (req,res) {

    console.log("Creating user . . . ");
    let account = req.body;
    account.email = req.body.email.toLowerCase();
    account.password = md5(req.body.password);
    db.user.create(account)
        .then((dbModel) => {
          
            res.json(dbModel);
        })
.catch((err) => {
    console.log(err);
    res.status(422).json(err);
});
}
}