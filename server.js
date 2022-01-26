/*jshint esversion: 6 */
const express = require('express');
const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/Web/index.html');
});

app.get('/script',(req,res) => {
    res.sendFile(__dirname + '/Web/index.js');
});

app.get('/style',(req,res) => {
    res.sendFile(__dirname + '/Web/index.css');
});


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});