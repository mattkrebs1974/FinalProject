const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SurveySchema = new Schema({
  QuestionOne: {
    type: Number,
    required: true,
  },
  QuestionTwo: {
    type: Number,
    required: true,
  },
  QuestionThree: {
    type: Number,
    required: true,
  },
  QuestionFour: {
    type: Number,
    required: true,
  },
});

const performance = mongoose.model("performance", SurveySchema);
module.exports = performance;
