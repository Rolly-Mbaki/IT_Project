const express = require('express')
const flRouter = express.Router()
const axios = require('axios')


flRouter.get("/favorieteLeague", (req: any, res: any) => {
  res.render("favorieteLeague");
});

export{}
module.exports = flRouter