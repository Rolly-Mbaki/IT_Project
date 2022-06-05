const express = require("express");
const app = express();
const ejs = require("ejs");
const mongoose = require('mongoose')

// connect met mongoDB
const dbURI = 'mongodb+srv://testwebsite:testwebsite@fifacluster.5fgn5.mongodb.net/SBCt?retryWrites=true&w=majority'
mongoose.connect(dbURI)
  .then((result) => console.log('Connected to db'))
  .catch((err) => console.log(err))

  
app.use(express.json({ limit: "1mb" }));
app.use(express.urlencoded({ extended: true }));
app.set("port", 3000);

app.use(express.static("public"));
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/img', express.static(__dirname + 'public/img'))
app.use('/js', express.static(__dirname + 'public/js'))

app.set('views', './views')
app.set("view engine", "ejs")

//routes
const bcRouter = require('./routes/blacklistedClubs')
const fcRouter = require('./routes/favorieteClubs')
const flRouter = require('./routes/favorieteLeague')
const gameRouter = require('./routes/game')
const indexRouter = require('./routes/index')
const landingPageRouter = require('./routes/landingPage')
const quizPageRouter = require('./routes/quizPage')
const quizEndRouter = require('./routes/quizEnd')
const highscoreRouter = require('./routes/highscore')

app.use('/', bcRouter)
app.use('/', fcRouter)
app.use('/', flRouter)
app.use('/', gameRouter)
app.use('/', indexRouter)
app.use('/', landingPageRouter)
app.use('/', quizPageRouter)
app.use('/', quizEndRouter)
app.use('/', highscoreRouter)

app.set('port', (process.env.PORT || 5000))
app.listen(app.get("port"), () => {
  console.log(`Web application started at http://localhost:${app.get("port")}`);
});

