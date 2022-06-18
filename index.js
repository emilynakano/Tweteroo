import express from 'express'
import cors from "cors";

const server = express();
server.use(express.json());
server.use(cors())
const pessoas = [];

server.post('/sign-up', (req, res) => {
    const pessoa = req.body;
    pessoas.push(pessoa);
    res.send("OK");
})

console.log("oi")

server.listen(5000)