const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'dist')));

app.get('/', (req,res) => {
    res.send("Invalid page");
})

app.listen(port, () => {
    console.log(`Starting the server at port ${port}`);
});