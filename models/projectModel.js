const mongoose = require("mongoose");
const slugify = require("slugify");
const validator = require("validator");
const isBase64 = require("is-base64");

const projectSchema = new mongoose.Schema({
  id: String,
  title: {
    type: String,
    required: [true, "A project must have a title!"], // This is a validator
    unique: true, // Not allowed two or more tours to have the same name
    trim: true,
  },
  subtitle: {
    type: String,
    required: [
      true,
      "Please set a project subtitle, a small description from where it comes from!",
    ],
  },
  description: {
    type: String,
    required: [true, "A project is required to have a description!"],
  },
  technologies_used: {
    type: [String],
    required: [true, "A project is required to have at least one used tool!"],
    validate: {
      validator: function (tools) {
        return tools.length > 0;
      },
      message: "Project must have at least one technology tool!",
    },
  },
  images: {
    type: [String],
    required: [true, "A project is required to have at least one image"],
    validate: {
      validator: function (images) {
        return (
          images.length > 0 &&
          images.every((img) => isBase64(img, { allowMime: true }))
        );
      },
      message:
        "A project is required to have at least one image and that image to be at base64 format!",
    },
  },
  github: {
    type: String,
    trim: true,
    validate: {
      validator: function (val) {
        return val === "" || validator.isURL;
      },
      message: "Please provide a valid URL of the project's github repo!",
    },
  },
  link: {
    type: String,
    trim: true,
    validate: {
      validator: function (val) {
        return val === "" || validator.isURL;
      },
      message: "Please provide a valid URL of the project's link!",
    },
  },
  hidedProject: {
    type: Boolean,
    default: false,
  },
});

projectSchema.pre("save", function () {
  return (this.id = this._id);
});

// Query middleware to filter possible hidedProjects
projectSchema.pre(/^find/, function (next) {
  this.find({ hidhidedProjectedJob: { $ne: true } });
  next();
});

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;
