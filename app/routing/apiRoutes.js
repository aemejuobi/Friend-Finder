var friends = require("../data/friends.js");

module.exports = (app) =>{
    app.get("/api/friends", (req, res)=>{
        res.json(friends);
    });

    app.post("/api/friends", (req, res)=>{
        let total = 0;

        

        const userData = req.body;
        const userName = userData.name
        const userScores = userData.scores;

        userData = {
            name: req.body.name,
            photo: req.body.photo,
            scores
        }

        for(let i = 0; i < friends.length; i++){
            friends.push(userData);
        }
    });
}