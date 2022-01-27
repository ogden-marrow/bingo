/*jshint esversion: 11 */
import express, { json } from 'express';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const app = express();
import { readFileSync } from "fs";
import fetch from 'node-fetch';
const __filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(__filename);
app.use(json());
const port = process.env.PORT || 3000;

app.get('/WordsAPI', (req, res) => {
    res.json(getRandomWords());
});

app.get('/WordsAPITest', (req, res) => {
    res.json(testAPI());
});

app.get('/', (req, res) => {
    res.sendFile(dirname + '/Web/index.html');
});

app.get('/script', (req, res) => {
    res.sendFile(dirname + '/Web/index.js');
});

app.get('/scriptWOTD', (req, res) => {
    res.sendFile(dirname + '/Web/WOTD.js');
});

app.get('/style', (req, res) => {
    res.sendFile(dirname + '/Web/index.css');
});
app.get('/styleWOTD', (req, res) => {
    res.sendFile(dirname + '/Web/WOTD.css');
});

app.get('/wordOfTheDay', (req, res) => {
    res.sendFile(dirname + '/Web/WOTD.html');
});

app.listen(port, () => {
    console.log(`Example app listening at http://170.187.145.227:${port}`);
});

function getRandomWords() {
    let outWordsLen = 25;
    let inWords = readFileSync('Web/caleb.txt').toString().split("\n");
    let outWords = new Array(outWordsLen).fill(0);
    for (let i = 0; i < outWordsLen; i++) {
        let rand = Math.floor(Math.random() * inWords.length);
        if (!outWords.includes(inWords[rand])) {
            outWords[i] = inWords[rand];
        } else {
            i--;
        }
    }
    return outWords;
}

function testAPI() {
    fetch('http://170.187.145.227:3000/WordsAPI')
        .then(res => res.json())
        .then(out => {
            out.forEach(element => {
                out.forEach(element2 => {
                    if (element != element2) {
                        if (element.toLowerCase() == element2.toLowerCase()) {
                            console.log("Error: " + element + " and " + element2 + " are the same word");
                        }
                    }
                });
            });
        }
        )
        .catch(err => console.log(err));
}