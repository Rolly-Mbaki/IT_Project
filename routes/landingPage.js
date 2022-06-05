const express = require('express')
const landingPageRouter = express.Router()
const axios = require('axios')

landingPageRouter.get("/landingPage", (req, res) => {
    res.render("landingPage");
  });
  

module.exports = landingPageRouter