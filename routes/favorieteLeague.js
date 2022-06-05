const express = require('express')
const flRouter = express.Router()
const axios = require('axios')


flRouter.get("/favorieteLeague", (req, res) => {
  res.render("favorieteLeague");
});

module.exports = flRouter