const express = require("express");
const app = express();
const ejs = require("ejs");

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
const apiTestRouter = require('./routes/apiTest')
const bcRouter = require('./routes/blacklistedClubs')
const fcRouter = require('./routes/favorieteClubs')
const flRouter = require('./routes/favorieteLeague')
const gameRouter = require('./routes/game')
const indexRouter = require('./routes/index')
const landingPageRouter = require('./routes/landingPage')
const quizPageRouter = require('./routes/quizPage')
const quizTestRouter = require('./routes/quizTest')
const quizEndRouter = require('./routes/quizEnd')

app.use('/', apiTestRouter)
app.use('/', bcRouter)
app.use('/', fcRouter)
app.use('/', flRouter)
app.use('/', gameRouter)
app.use('/', indexRouter)
app.use('/', landingPageRouter)
app.use('/', quizPageRouter)
app.use('/', quizTestRouter)
app.use('/', quizEndRouter)

app.listen(app.get("port"), () => {
  console.log(`Web application started at http://localhost:${app.get("port")}`);
});

export {};
