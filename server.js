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

// Express 5 requires a named wildcard. Serve the app for client-side routes too.
app.get('/{*path}', (req, res, next) => {
    if (path.extname(req.path)) {
        return next();
    }
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(port, () => {
    console.log(`Starting the server at port ${port}`);
});
