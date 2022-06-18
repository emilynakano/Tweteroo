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
    const tweet = req.body;
    tweets.push(tweet);
    res.send("OK");
})

console.log("oi")

server.listen(5000)