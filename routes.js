const express = require("express");

const User = require("./models.js")

const router = express.Router();

// router.post("/new-user", (req, resp) => {
//   const {username } = req.body;
//   const User = User({username})
//   console.log(User)
  
// })

router.get("/echo", (req, resp) => {
  resp.json({echo: "hi"})
})

module.exports = router;
