const express = require('express')
const quizPageRouter = express.Router()
const axios = require('axios')


quizPageRouter.get("/quizPage", (req, res) => {
  res.render("quizPage");
});


module.exports = quizPageRouter