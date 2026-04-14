const mongoose = require("mongoose");

const teacherSchema = new mongoose.Schema(
  {
    name: String,
    age: Number,
    gender: String,
    subject: String,
    experience: Number,
  },
  { timestamps: true },
);

const Teacher = mongoose.model("Teacher", teacherSchema);
module.exports = { Teacher }; 