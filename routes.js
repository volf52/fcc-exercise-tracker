const express = require("express");

const User = require("./models.js")

const router = express.Router();

router.post("/new-user", (req, resp) => {
  const {username } = req.body;
  const us  = new User({username})
  return resp.status(200).json(us)
})

router.get("/echo", (req, resp) => {
  resp.json({echo: "hi"})
})

module.exports = router;
