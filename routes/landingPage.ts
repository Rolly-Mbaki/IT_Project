const express = require('express')
const landingPageRouter = express.Router()
const axios = require('axios')

landingPageRouter.get("/landingPage", (req: any, res: any) => {
    res.render("landingPage");
  });
  
export{}
module.exports = landingPageRouter