const mongoose = require("mongoose");
const { InsultTheme, InsultSeverity } = require("../constants");

const insultSchema = new mongoose.Schema({
  content: {
    type: String,
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

module.exports = mongoose.model("Insult", insultSchema);