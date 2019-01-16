const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const scholarshipSchema = new Schema({
  Title: { type: String},
  Link: { type: String },
  College:{ type: String},
  Award:{type: String},
  Eligibility: { type: String},
  Deadline: {type: String}

  
});

const Scholarship = mongoose.model("Scholarship", scholarshipSchema);

module.exports = Scholarship;