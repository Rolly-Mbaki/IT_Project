const express = require('express')
const gameRouter = express.Router()
const axios = require('axios')
const FavClub = require('../models/favClub')
const BlacklistedClub = require('../models/blacklistedClub')


gameRouter.use(express.urlencoded({ extended: true }));
//om req.body in json formaat terug te krijgen anders is het undefined (middleware)

gameRouter.get("/game", async(req, res) => {
  
  res.render("game");
});
//code van https://www.youtube.com/watch?v=VVGgacjzc2Y&list=LL&index=3&t=240s
gameRouter.post("/game", (req,res) =>{
  console.log(req.body)
  //toevoegen aan favclubs collection
  const favclub = new FavClub(req.body)
  if (!(favclub.league == undefined)) {
  favclub.save()
    .then((result) => {
    })
    .catch((err) => {
      console.log(err)
    })
  }

  //toevoegen aan blacklistedclubs collection
  const blacklistedclub = new BlacklistedClub(req.body)
  
  if (!(blacklistedclub.league == undefined)) {
    blacklistedclub.save()
    .then((result) => {
    })
    .catch((err) => {
      console.log(err)
    })
  }
})

gameRouter.get("/favclub", (req, res)=>{
  
  FavClub.find()
    .then((result) => {
      res.send(result)
    })
    .catch((err)=> console.log(err))
})

module.exports = gameRouter