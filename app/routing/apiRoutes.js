// bring in data from friends.js
var friendData = require("../data/friends");

// ROUTING
module.exports = function(app) {
    
    app.get("/api/friends", function(req, res) {
        res.json(friendData);
      });
    
      app.post("/api/friends",function(req,res){

        var newFriend = req.body;
        var newFriendScore = req.body.userScores;
        var totaldiff;

        var match = {
            name: null,
            photo: null
        }

        var lowestDiff = 100;

        for (var i = 0; i < friendData.length; i++) {

            totaldiff = 0;

            for(var j = 0; j < friendData[i].scores.length; j++) {

            totaldiff += Math.abs(friendData[i].scores[j] - newFriend.userScores[j]);
            };

            if (totaldiff < lowestDiff) {
                lowestDiff = totaldiff;
                match.name = friendData[i].name;
                match.photo = friendData[i].photo;
              }
        };
  
    friendData.push(newFriend);
    res.json(match);

    console.log(match);
   
      });
    }