const express = require('express')
const quizEndRouter = express.Router()
const axios = require('axios')

quizEndRouter.get("/quizEnd", async(req, res) => {
  
  res.render("quizEnd");
});

module.exports = quizEndRouter