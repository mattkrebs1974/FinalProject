const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SurveySchema = new Schema({
  
   email:{
    type:String,
    required:true,
  },
  
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

const survey = mongoose.model("performance", SurveySchema);
module.exports = survey;
