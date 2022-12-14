const express = require("express");
const jobController = require("../controllers/jobController");
const authController = require("../controllers/authController");

const router = express.Router();

router
  .route("/")
  .get(jobController.getAllJobs)
  .post(authController.protect, jobController.createJob);

router
  .route("/:id")
  .get(authController.protect, jobController.getJobById)
  .patch(authController.protect, jobController.updateJob)
  .delete(
    authController.protect,
    authController.restrictTo("admin"),
    jobController.deleteJob
  );

module.exports = router;
