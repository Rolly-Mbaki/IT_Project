const express = require('express')
const quizPageRouter = express.Router()
const axios = require('axios')


quizPageRouter.get("/quizPage", (req: any, res: any) => {
  res.render("quizPage");
});

export{}
module.exports = quizPageRouter