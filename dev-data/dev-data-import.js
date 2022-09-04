const fs = require("fs");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Job = require("../models/jobModel");
const Project = require("../models/projectModel");

dotenv.config({ path: "./.env.development.local" });

const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("DB was succesfully established! 😀");
  });

// READ JSON FILES
const jobs = JSON.parse(fs.readFileSync(`${__dirname}/jobs.json`, "utf-8"));
const projects = JSON.parse(
  fs.readFileSync(`${__dirname}/projects.json`, "utf-8")
);

// IMPORT DATA INTO DB
const importData = async () => {
  const jobObj = jobs.jobs;
  let firebaseIDs = Object.keys(jobObj);
  const saveJobs = firebaseIDs.map((id) => {
    return jobObj[id];
  });

  const projectObj = projects.projects;
  firebaseIDs = Object.keys(projectObj);
  const saveProjects = firebaseIDs.map((id) => {
    return projectObj[id];
  });

  try {
    await Job.create(saveJobs);
    await Project.create(saveProjects);

    console.log("Data succesfully loaded");
    process.exit();
  } catch (err) {
    console.log(err);
  }
};

// DELETE ALL DATA FROM COLLECTIONS
const deleteData = async () => {
  try {
    await Job.deleteMany();
    await Project.deleteMany();
    console.log("Data succesfully deleted");
    process.exit();
  } catch (err) {
    console.log(err);
  }
};

if (process.argv[2] === "--import") {
  importData();
} else if (process.argv[2] === "--delete") {
  deleteData();
}

console.log(process.argv);
