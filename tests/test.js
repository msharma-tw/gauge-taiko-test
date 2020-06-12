var locators = require("./objects/locators");
var testdata = require("../env/default/testdata.json");

console.log(testdata.baseURL);

//api creation using node
var express = require("express");
var app = express();
app.listen(3000, () => {
  console.log("Server running on port 3000");
});
