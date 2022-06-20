import express from 'express'
import cors from "cors";

const server = express();
server.use(express.json());
server.use(cors())
const pessoas = [];
const tweets = [];


server.post('/sign-up', (req, res) => {
    const pessoa = req.body;
    pessoas.push(pessoa);
    res.send("OK");
})
server.post('/tweets', (req, res) => {

    const tweet = {
		username: "",
		avatar: "",
	    tweet: ""
	}
    tweet.username = req.body.username;
    tweet.tweet = req.body.tweet;
    tweet.avatar = pessoas[pessoas.length - 1].avatar;
    tweets.push(tweet);
    res.send("OK");
})
server.get('/tweets', (req, res) => {
    tweets.reverse();
    if(tweets.length > 10) {
        tweets.length = 10;
    }
    res.send(tweets);
    tweets.reverse();
})

server.listen(5000)