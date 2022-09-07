const Skill = require("../models/skillModel");
const factory = require("../controllers/factoryHandler");

exports.getAllSkills = factory.getAll(Skill);

exports.getSkillById = factory.getOne(Skill);

exports.createSkill = factory.createOne(Skill);

exports.updateSkill = factory.updateOne(Skill);

exports.deleteSkill = factory.deleteOne(Skill);
