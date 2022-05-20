const express = require('express')
const fcRouter = express.Router()
const axios = require('axios')

fcRouter.get("/favorieteClubs", (req: any, res: any) => {
    res.render("favorieteClubs");
  });

export{}
module.exports = fcRouter

