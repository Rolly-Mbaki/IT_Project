const express = require('express')
const gameRouter = express.Router()
const axios = require('axios')

gameRouter.get("/game", async(req: any, res:any) => {
  
  res.render("game");
});

export{}
module.exports = gameRouter