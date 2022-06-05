const express = require('express')
const gameRouter = express.Router()
const axios = require('axios')
const FavClub = require('../models/favClub')
const BlacklistedClub = require('../models/blacklistedClub')


gameRouter.use(express.urlencoded({ extended: true }));
//om req.body in json formaat terug te krijgen anders is het undefined (middleware)

gameRouter.get("/game", async(req: any, res:any) => {
  
  res.render("game");
});
//code van https://www.youtube.com/watch?v=VVGgacjzc2Y&list=LL&index=3&t=240s
gameRouter.post("/game", (req:any,res:any) =>{
  console.log(req.body)
  //toevoegen aan favclubs collection
  const favclub = new FavClub(req.body)
  if (!(favclub.league == undefined)) {
  favclub.save()
    .then((result:any) => {
    })
    .catch((err:any) => {
      console.log(err)
    })
  }

  //toevoegen aan blacklistedclubs collection
  const blacklistedclub = new BlacklistedClub(req.body)
  
  if (!(blacklistedclub.league == undefined)) {
    blacklistedclub.save()
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