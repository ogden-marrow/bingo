/*jshint esversion: 6 */
import express from 'express';
const app = express();
app.use();



app.get('/', (req, res) => {
    res.redirect('/Web/index.html');
});

const port = process.env.PORT || 5656;
app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});