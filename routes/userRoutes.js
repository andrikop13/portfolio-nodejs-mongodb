const express = require("express");
const usersCtrl = require("../controllers/userController");
const authController = require("../controllers/authController");

const router = express.Router();

router.post("/signup", authController.signup);
router.post("/login", authController.login);

router.post("/forgotPassword", authController.forgotPassword);
router.patch("/resetPassword/:token", authController.resetPassword);

router.patch(
  "/updateMyPassword",
  authController.protect,
  authController.updatePassword
);

router.patch("/updateUser", authController.protect, usersCtrl.updateUser);

router.delete("/deleteUser", authController.protect, usersCtrl.deleteUser);

router.route("/").get(usersCtrl.getAllUsers).post(usersCtrl.createUser);

router
  .route("/:id")
  .get(usersCtrl.getUser)
  .post(usersCtrl.createUser)
  .patch(usersCtrl.updateUser)
  .delete(usersCtrl.deleteUser);

module.exports = router;
