const Job = require("../models/jobModel");
const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");

exports.getAllJobs = catchAsync(async (req, res, next) => {
  const query = Job.find();

  const jobs = await query;

  res.status(200).json({
    status: "success",
    results: jobs.length,
    data: {
      jobs,
    },
  });
});

exports.getJobById = catchAsync(async (req, res, next) => {
  const job = await Job.findById(req.params.id);

  if (!job) {
    return next(new AppError("No job found with that ID", 404));
  }

  res.status(200).json({
    status: "success",
    data: {
      job,
    },
  });
});

exports.createJob = catchAsync(async (req, res, next) => {
  const newJob = await Job.create(req.body);

  res.status(200).json({
    status: "success",
    data: {
      job: newJob,
    },
  });
});

exports.updateJob = catchAsync(async (req, res, next) => {
  const job = await Job.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!job) {
    return next(new AppError("No Job found with that ID", 404));
  }

  res.status(200).json({
    status: "success",
    data: {
      job,
    },
  });
});

exports.deleteJob = catchAsync(async (req, res, next) => {
  const job = await Job.findByIdAndDelete(req.params.id);

  if (!job) {
    return next(new AppError("No Job found with that ID", 404));
  }

  res.status(204).json({
    status: "success",
    data: null,
  });
});
