let friends = require("../data/friends.js");


module.exports = function (app) {
    app.get('/api/friends', function (req, res) {
        res.json(friends);
    })
    app.post('/api/friends', function (req, res) {

        let match = findMyFriend(req.body);
        res.send(match)

    })
}



function findMyFriend(arrNum) {

    let userSum = 0;
    let lowestDiff = 100;
    let bestMatch;

    for (let i = 0; i < arrNum.length; i++) {
        userSum += parseInt(arrNum[i]);
    }

    for (let friend of friends) {
        let friendSum = 0;
        for (let points of friend.scores) {
            friendSum += points;
        }
        friend.sum = friendSum;
    }
    console.log(friends);

    for (let friend of friends) {
        if (Math.abs(userSum - friend.sum) < lowestDiff) {
            lowestDiff = Math.abs(userSum - friend.sum);
            bestMatch = friend;
        }
    }
    return bestMatch
}

