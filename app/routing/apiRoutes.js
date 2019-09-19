// this allows us to access our friendsDatabase object from friends.js that includes both our friends array plus our matching function
var friends = require("../data/friends.js");
console.log(friends);

// this pulls in our friend array and stores it in a variable
var retrievedFriendsData = function(req, res) {
  return res.json(friends.friendsDatabase);
};

// callback function to add a freind
var addFriendProfile = function(req, res) {
  var body = req.body;

  // declares variable
  var myFriendMatch;

  // this pulls in the function stored in the friendsDatabase object stored in friends.js to find our closest match
  myFriendMatch = friends.matchFriendLogic(body);
  return res.json(myFriendMatch);
};

module.exports = {
  retrievedFriendsData: retrievedFriendsData,
  addFriendProfile: addFriendProfile
};
