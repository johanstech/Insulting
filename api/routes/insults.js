const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Get insult");
});

router.post("/new", (req, res) => {
  res.send("Post insult");
});

module.exports = router;