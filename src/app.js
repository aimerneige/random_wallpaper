// require
var express = require("express");

// personal require
var fortuneWallpaper = require("./utils/fortuneWallpaper");

// express app
var app = express();

// set view engine
var handlebars = require("express3-handlebars").create({
  defaultLayout: "main",
});
app.engine("handlebars", handlebars.engine);
app.set("view engine", "handlebars");

// set port
app.set("port", process.env.PORT || 4000);

// static file
app.use(express.static(__dirname + "/public"));

// Routes
app.get("/", function (req, res) {
  var wallpaper = fortuneWallpaper();
  console.log(wallpaper);
  res.render("home", { wallpaper: wallpaper });
});

// 404 Pages
app.use(function (req, res) {
  res.status(404);
  res.render("404");
});

// 500 Pages
app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500);
  res.render("500");
});

// start listen
app.listen(app.get("port"), function () {
  console.log(
    "Express started on http://localhost:" +
      app.get("port") +
      "; Press Ctrl+C to terminate."
  );
});
