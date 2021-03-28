const mongoose = require("mongoose");
const { InsultPartType, InsultTheme, InsultSeverity } = require("../constants");

const insultPartSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
  type: {
    type: InsultPartType,
    required: true,
  },
  theme: {
    type: InsultTheme,
    required: true,
  },
  severity: {
    type: InsultSeverity,
    required: true,
  },
});

module.exports = mongoose.model("InsultPart", insultPartSchema);