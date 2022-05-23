const express = require('express')
const highscoreRouter = express.Router()
const axios = require('axios')

highscoreRouter.get("/highscore", async(req: any, res:any) => {
  
  res.render("highscore");
});

export{}
module.exports = highscoreRouter