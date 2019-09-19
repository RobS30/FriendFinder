// Dependencies
var express = require("express");
var html = require("./app/routing/htmlRoutes.js");
var api = require("./app/routing/apiRoutes.js");
var path = require("path"); //this is built into node and does not require npm install

// Initialize Express
var app = express();
var PORT = process.env.PORT || 8080;

// Allows Express to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ---Express Routes for Views---
// Route- Home Page
app.get("/", html.homePage);

// Route- Survey Page
app.get("/survey", html.surveyPage);

//  ---Express Routes for Models---
// Route for GET and POST
app.get("/api/friends", api.retrievedFriendsData);
app.post("/api/friends", api.addFriendProfile);

// Starts server
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
