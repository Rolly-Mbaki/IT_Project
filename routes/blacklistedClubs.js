const express = require('express')
const bcRouter = express.Router()
const axios = require('axios')


bcRouter.get("/blacklistedClubs", (req, res) => {
  res.render("blacklistedClubs");
});

module.exports = bcRouter

