const mongoose = require("mongoose");

const scoreSchema = new mongoose.Schema({
    score: Number,
    userResult: Array
});

const Score = mongoose.model('Score', scoreSchema);
module.exports = Score;