const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  console.log("Route: /insults/");
  res.send("Get insult");
});

router.post("/new", (req, res) => {
  console.log("Route: /insults/new");
  res.send("Post insult");
});

module.exports = router;