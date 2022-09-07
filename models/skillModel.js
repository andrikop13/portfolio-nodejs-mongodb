const mongoose = require("mongoose");

const skillSchema = new mongoose.Schema({
  value: {
    type: String,
    required: [true, "A skill must have a name"],
  },
  weight: {
    type: Number,
    required: [true, "A skill must have a weight of how good you are at this!"],
  },
});

skillSchema.pre("save", function () {
  return (this.id = this._id);
});

const Skill = mongoose.model("Skill", skillSchema);

module.exports = Skill;
