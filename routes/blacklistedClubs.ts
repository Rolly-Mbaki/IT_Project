const express = require('express')
const bcRouter = express.Router()
const axios = require('axios')


bcRouter.get("/blacklistedClubs", (req: any, res: any) => {
  res.render("blacklistedClubs");
});

  export{}
  module.exports = bcRouter

