// dependencies
var path = require("path");

var homeFileRoute = path.join(__dirname, "../public", "home.html");
var surveyFileRoute = path.join(__dirname, "../public", "survey.html");

var homePage = function(req, res) {
  res.sendFile(homeFileRoute, function(err) {
    if (err) {
      console.log(err);
    } else {
      console.log("Sent:", homeFileRoute);
    }
  });
};

var surveyPage = function(req, res) {
  res.sendFile(surveyFileRoute, function(err) {
    if (err) {
      console.log(err);
    } else {
      console.log("Sent:", surveyFileRoute);
    }
  });
};

module.exports = {
  homePage: homePage,
  surveyPage: surveyPage
};
