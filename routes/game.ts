const express = require('express')
const gameRouter = express.Router()
const axios = require('axios')
const FavClub = require('../models/favClub')

gameRouter.get("/game", async(req: any, res:any) => {
  
  res.render("game");
});

gameRouter.get("/favclub", (req: any, res:any)=>{
  
  FavClub.find()
    .then((result:any) => {
      res.send(result)
    })
    .catch((err:any)=> console.log(err))
})

export{}
module.exports = gameRouter