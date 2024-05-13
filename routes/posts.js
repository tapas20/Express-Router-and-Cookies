const express = require("express");
const router = express.Router();

//Post
//Index - posts
router.get("/", (req, res) => {
  res.send("GET for Posts");
});

//Show - posts
router.get("/:id", (req, res) => {
  res.send("GET for Post id");
});

//POST - posts
router.post("/", (req, res) => {
  res.send("POST for Posts");
});

//DELETE - posts
router.delete("/:id", (req, res) => {
  res.send("DELETE for Post id");
});

module.exports = router;
