const mongoose = require("mongoose");

const scoreSchema = new mongoose.Schema({
    score: Number,
    userResult: Array,
    email: "String",
    question1: Number,
    question2: Number,
    question3: Number,
    question4: Number,

});

const Score = mongoose.model('Score', scoreSchema);
module.exports = Score;