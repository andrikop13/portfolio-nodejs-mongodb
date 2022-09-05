const express = require("express");
const projectController = require("../controllers/projectController");
const authController = require("../controllers/authController");

const router = express.Router();

router
  .route("/")
  .get(projectController.getAllProjects)
  .post(authController.protect, projectController.createProject);

router
  .route("/:id")
  .get(authController.protect, projectController.getProjectById)
  .patch(authController.protect, projectController.updateProject)
  .delete(
    authController.protect,
    authController.restrictTo("admin"),
    projectController.deleteProject
  );

module.exports = router;
