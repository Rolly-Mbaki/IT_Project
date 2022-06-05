const express = require('express')
const fcRouter = express.Router()
const axios = require('axios')

fcRouter.get("/favorieteClubs", (req, res) => {
    res.render("favorieteClubs");
  });

module.exports = fcRouter

