const Job = require("../models/jobModel");
const factory = require("../controllers/factoryHandler");

exports.getAllJobs = factory.getAll(Job);

exports.getJobById = factory.getOne(Job);

exports.createJob = factory.createOne(Job);

exports.updateJob = factory.updateOne(Job);

exports.deleteJob = factory.deleteOne(Job);
