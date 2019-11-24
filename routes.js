const express = require("express");

const models = require("./models.js")

const {User} = models;

const router = express.Router();

router.post("/new-user", (req, resp) => {
  const {username } = req.body;
  const user = User.findOne({username});
  if(user){
    return resp.status(401).json({error: "User already exists", user})
  }
  return User.create({username}).then(user => {
    return resp.status(200).json(user)
  }).catch(error => {
    console.error(error)
    return resp.status(400).json({error})
  })
})

router.get("/echo", (req, resp) => {
  resp.json({echo: "hi"})
})

module.exports = router;
