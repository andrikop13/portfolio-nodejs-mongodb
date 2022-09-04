const mongoose = require("mongoose");
const slugify = require("slugify");
const validator = require("validator");

const jobSchema = new mongoose.Schema({
  id: String,
  date: {
    type: String,
    required: [true, "A Job must have date range field!"],
  },
  descriptionItems: {
    type: [String],
    required: [true, "Description items must be at least one!"],
  },
  link: {
    type: String,
    trim: true,
    validate: [
      validator.isURL,
      "Please provide a valid URL of the company you worked for!",
    ],
  },
  organization: {
    type: String,
    required: [true, "Organization you worked for must not be empty!"],
  },
  position: {
    type: String,
    required: [
      true,
      "You have to send a description of the position you had in your previous job!",
    ],
  },
  hidedJob: {
    type: Boolean,
    default: false,
  },
});

jobSchema.pre("save", function () {
  return (this.id = this._id);
});

// Query middleware to filter possible hidedJobs
jobSchema.pre(/^find/, function (next) {
  this.find({ hidedJob: { $ne: true } });
  next();
});

const Job = mongoose.model("Job", jobSchema);

module.exports = Job;
