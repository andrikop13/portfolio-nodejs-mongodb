const User = require("../models/userModel");
const factory = require("../controllers/factoryHandler");

exports.getUser = factory.getOne(User);

exports.createUser = factory.createOne(User);

exports.updateUser = factory.updateOne(User, "name", "email");

exports.deleteUser = factory.deleteOne(User);

exports.getAllUsers = factory.getAll(User);
