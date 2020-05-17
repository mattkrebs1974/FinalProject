const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const performanceSchema = new Schema({
  name:{
    type:String,
    required:true,
  },
    timesPlayed: {
    type: Number,
    required: true,
  },
  CurrentAverage: {
    type: Number,
    required: true,
  },
  CurrentScore: {
    type: Number,
    required: true,
  },
  date: { 
    type: Date, 
    default: Date.now 
},

});

const performance = mongoose.model("performance", performanceSchema);
module.exports = performance;



