const express = require('express')
const indexRouter = express.Router()
const axios = require('axios')


indexRouter.get("/", (req: any, res: any) => {
    res.render("index");
  });

  export{}
  module.exports = indexRouter