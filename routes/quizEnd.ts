const express = require('express')
const quizEndRouter = express.Router()
const axios = require('axios')

quizEndRouter.get("/quizEnd", async(req: any, res:any) => {
  
  res.render("quizEnd");
});

export{}
module.exports = quizEndRouter