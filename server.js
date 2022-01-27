/*jshint esversion: 6 */
const express = require('express');
const app = express();
const fs = require("fs");
app.use(express.json());
const port = process.env.PORT || 3000;

app.get('/WordsAPI', (req, res) => {
    res.json(getRandomWords());
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/Web/index.html');
});

app.get('/script', (req, res) => {
    res.sendFile(__dirname + '/Web/index.js');
});

app.get('/style', (req, res) => {
    res.sendFile(__dirname + '/Web/index.css');
});


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

function getRandomWords() {
    let inWords = fs.readFileSync('Web/caleb.txt').toString().split("\n");
    let outWords = new Array(24).fill(0);
    for (let i = 0; i < 24; i++) {
        let rand = Math.floor(Math.random() * inWords.length);
        outWords[i] = inWords[rand];
    }
    return JSON.stringify(outWords);
}