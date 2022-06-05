const express = require('express')
const indexRouter = express.Router()
const axios = require('axios')


indexRouter.get("/", (req, res) => {
    res.render("index");
  });

  
module.exports = indexRouter