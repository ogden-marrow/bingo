/*jshint esversion: 6 */
import express from 'express';
const app = express();
app.use(express.static(__dirname + '/public'));



app.get('/', (req, res) => {
    res.redirect('/charles');
});

const port = process.env.PORT || 5656;
app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});