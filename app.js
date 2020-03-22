const express = require("express");
const hbs = require("hbs");
const path = require("path");

var app = express();
console.log("-------------------------------------");
// console.log(path.join(__dirname, "public"));
// console.log(path.join(__dirname, "views/partials"));

app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "hbs");

hbs.registerPartials(__dirname + "/views/partials");
debugger;
hbs.registerHelper("getYear", number => {
  return number + 10 + new Date().getFullYear();
});

app.get("/", (req, res) => {
  res.render("index.hbs", {
    people: ["Yehuda Katz", "Alan Johnson", "Charles Jolley"],
    welcome: "hello",
    year: new Date().getFullYear()
  });
});

app.get("/about", (req, res) => {
  res.render("about.hbs", {
    year: new Date().getFullYear()
  });
});

app.listen(3000);
