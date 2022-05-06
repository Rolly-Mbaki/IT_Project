const express = require("express");
const app = express();
const ejs = require("ejs");

app.use(express.json({ limit: "1mb" }));
app.use(express.urlencoded({ extended: true }));
app.set("port", 3000);
app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req: any, res: any) => {
  res.render("index");
});

app.get("/landingPage", (req: any, res: any) => {
  res.render("landingPage");
});

app.get("/quizPage", (req: any, res: any) => {
  res.render("quizPage");
});

app.get("/game", (req: any, res: any) => {
  res.render("game");
});

app.get("/favorieteClubs", (req: any, res: any) => {
  res.render("favorieteClubs");
});

app.get("/blacklistedClubs", (req: any, res: any) => {
  res.render("blacklistedClubs");
});

app.get("/favorieteLeague", (req: any, res: any) => {
  res.render("favorieteLeague");
});

app.listen(app.get("port"), () => {
  console.log(`Web application started at http://localhost:${app.get("port")}`);
});

export {};
