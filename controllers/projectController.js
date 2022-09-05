const Project = require("../models/projectModel");
const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");

exports.getAllProjects = catchAsync(async (req, res, next) => {
  const query = Project.find();

  const projects = await query;

  res.status(200).json({
    status: "success",
    results: projects.length,
    data: {
      projects,
    },
  });
});

exports.getProjectById = catchAsync(async (req, res, next) => {
  const project = await Project.findById(req.params.id);

  if (!project) {
    return next(new AppError("No project found with that ID", 404));
  }

  res.status(200).json({
    status: "success",
    data: {
      job,
    },
  });
});

exports.createProject = catchAsync(async (req, res, next) => {
  const newProject = await Project.create(req.body);

  res.status(200).json({
    status: "success",
    data: {
      project: newProject,
    },
  });
});

exports.updateProject = catchAsync(async (req, res, next) => {
  const project = await Project.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!project) {
    return next(new AppError("No project found with that ID", 404));
  }

  res.status(200).json({
    status: "success",
    data: {
      project,
    },
  });
});

exports.deleteProject = catchAsync(async (req, res, next) => {
  const project = await Project.findByIdAndDelete(req.params.id);

  if (!project) {
    return next(new AppError("No project found with that ID", 404));
  }

  res.status(204).json({
    status: "success",
    data: null,
  });
});
