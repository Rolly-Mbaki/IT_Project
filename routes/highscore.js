const express = require('express')
const highscoreRouter = express.Router()
const axios = require('axios')

highscoreRouter.get("/highscore", async(req, res) => {
  
  res.render("highscore");
});

module.exports = highscoreRouter