
const express = require('express');
const bodyParser = require('body-parser');
const moongose = require('moongose');
const app = express();  //
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const port = 5000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.delete('/', (req, res) => {
    const  user = new User();
    user.delete();
})

app.listen(port, () => {
    console.log(`app up and listening at http://localhost:${port}`);
})