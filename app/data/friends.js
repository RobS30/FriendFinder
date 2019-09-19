// this array stores all of the data regarding potential friends
var friendsDatabase = {
  friendsArray: [
    {
      name: "Dwight",
      photo:
        "https://upload.wikimedia.org/wikipedia/en/thumb/c/cd/Dwight_Schrute.jpg/220px-Dwight_Schrute.jpg",
      scores: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    },
    {
      name: "Jim",
      photo:
        "https://upload.wikimedia.org/wikipedia/en/thumb/7/7e/Jim-halpert.jpg/220px-Jim-halpert.jpg",
      scores: [5, 5, 5, 5, 5, 5, 5, 5, 5, 5]
    },
    {
      name: "Michael",
      photo: "https://upload.wikimedia.org/wikipedia/en/d/dc/MichaelScott.png",
      scores: [3, 3, 3, 3, 3, 3, 3, 3, 3, 3]
    },
    {
      name: "Pam",
      photo:
        "https://upload.wikimedia.org/wikipedia/en/thumb/6/67/Pam_Beesley.jpg/220px-Pam_Beesley.jpg",
      scores: [2, 1, 2, 1, 2, 4, 5, 5, 4, 2]
    },
    {
      name: "Kevin",
      photo: "",
      scores: [3, 3, 4, 4, 3, 4, 5, 3, 1, 1]
    },
    {
      name: "Angela",
      photo:
        "https://upload.wikimedia.org/wikipedia/en/thumb/0/0b/Angela_Martin.jpg/230px-Angela_Martin.jpg",
      scores: [4, 2, 2, 2, 1, 1, 1, 5, 4, 1]
    }
  ],

  // this is our friend matching function (i.e. method) stored in our object that we can call on
  matchFriendLogic: function(me) {
    var sum = 0;
    var smallest = 50;
    var myFriend = {};
    for (var index in this.list) {
      var friend = this.list[index];
      sum = 0;
      for (var i = 0; i < friend.scores.length; i++) {
        sum += Math.abs(me.scores[i] - friend.scores[i]);
      }
      if (sum <= smallest) {
        smallest = sum;
        myFriend = friend;
      }
    }

    return myFriend;
  }
};

// this exports the friendsDatabase array
module.exports = friendsDatabase;
