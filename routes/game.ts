const express = require('express')
const gameRouter = express.Router()
const axios = require('axios')
const FavClub = require('../models/favClub')


gameRouter.use(express.urlencoded({ extended: true }));
//om req.body in json formaat terug te krijgen anders is het undefined (middleware)

gameRouter.get("/game", async(req: any, res:any) => {
  
  res.render("game");
});

gameRouter.post("/game", (req:any,res:any) =>{
  const favclub = new FavClub(req.body)

  if (!(favclub.league == undefined)) {
    favclub.save()
  .then((result:any) => {
  })
  .catch((err:any) => {
    console.log(err)
  })
  }
})

gameRouter.get("/favclub", (req: any, res:any)=>{
  
  FavClub.find()
    .then((result:any) => {
      res.send(result)
    })
    .catch((err:any)=> console.log(err))
})

export{}
module.exports = gameRouter