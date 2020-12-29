// require
var path = require("path");
var fs = require("fs");
const { get } = require("http");
const { exit } = require("process");

// This example returns a random integer between the specified values.
// The value is no lower than min 
// (or the next integer greater than min if min isn't an integer),
// and is less than (but not equal to) max.
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

function fortuneWallpaper(seed) {
  const directoryPath = path.join(__dirname, "../public/img");
  var wallpaperList = fs.readdirSync(directoryPath);
  return wallpaperList[getRandomInt(0, wallpaperList.length)];
}

module.exports = fortuneWallpaper;
