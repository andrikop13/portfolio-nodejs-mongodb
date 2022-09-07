const Project = require("../models/projectModel");
const factory = require("../controllers/factoryHandler");

exports.getAllProjects = factory.getAll(Project);

exports.getProjectById = factory.getOne(Project);

exports.createProject = factory.createOne(Project);

exports.updateProject = factory.updateOne(Project);

exports.deleteProject = factory.deleteOne(Project);
