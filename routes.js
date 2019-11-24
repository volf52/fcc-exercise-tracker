const express = require("express");

const models = require("./models.js")

const {User} = models;

const router = express.Router();

router.post("/new-user", (req, resp) => {
  const {username } = req.body;
  User.findOne({username}).then(user => {
    if(user){
      console.error(user)
      return resp.status(401).json({error: "User already exists"})
    }
    return User.create({username}).then(user => {
      return resp.status(200).json({username, _id: user._id})
    }).catch(error => {
      console.error(error)
      return resp.status(400).json({error})
    })
  }).catch(err => {
    console.error(err)
    return resp.status(500).json({err})
  })
})

router.get("/users", (req, resp) => {
  User
})

module.exports = router;
