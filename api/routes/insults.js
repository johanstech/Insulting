const express = require("express");
const router = express.Router();
const InsultPart = require("../models/insultpart");

router.get("/getallinsultparts", async (req, res) => {
  try {
    const insultParts = await InsultPart.find();
    res.json(insultParts);
  } catch (e) {
    res.status(500).json({ message: e.message});
  }
});

router.post("/postinsultpart", async (req, res) => {
  const insultPart = new InsultPart({
    content: req.body.content,
    type: req.body.type,
    theme: req.body.theme,
    severity: req.body.severity,
  });

  try {
    const newInsultPart = await insultPart.save();
    res.status(201).json(newInsultPart);
  } catch (e) {
    res.status(400).json({ message: e.message});
  }
});

module.exports = router;