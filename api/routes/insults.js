const express = require("express");
const router = express.Router();
const Insult = require("../models/insult");
const InsultPart = require("../models/insultpart");

//#region Insults
router.get("/all", async (req, res) => {
  try {
    const insult = await Insult.find();
    res.json(insult);
  } catch (e) {
    res.status(500).json({ message: e.message});
  }
});

router.get("/:id", getInsultById, (req, res) => {
  res.json(res.insult);
});

router.post("/", async (req, res) => {
  const insult = new Insult({
    content: req.body.content,
    theme: req.body.theme,
    severity: req.body.severity,
  });

  try {
    const newInsult = await insult.save();
    res.status(201).json(newInsult);
  } catch (e) {
    res.status(400).json({ message: e.message});
  }
});

async function getInsultById(req, res, next) {
  let insult;
  try {
    insult = await Insult.findById(req.params.id);
    if (insult === null) {
      return res.statu(404).json({ message: e.message});
    }
  } catch (e) {
    return res.status(500).json({ message: e.message});
  }
  res.insult = insult;
  next();
}
//#endregion

//#region InsultParts
router.get("/parts/", async (req, res) => {
  try {
    const insultParts = await InsultPart.find();
    res.json(insultParts);
  } catch (e) {
    res.status(500).json({ message: e.message});
  }
});

router.get("/parts/:id", getInsultPartById, (req, res) => {
  res.json(res.insultPart);
});

router.post("/parts/", async (req, res) => {
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

async function getInsultPartById(req, res, next) {
  let insultPart;
  try {
    insultPart = await InsultPart.findById(req.params.id);
    if (insultPart === null) {
      return res.statu(404).json({ message: e.message});
    }
  } catch (e) {
    return res.status(500).json({ message: e.message});
  }
  res.insultPart = insultPart;
  next();
}
//#endregion

module.exports = router;