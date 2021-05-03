const express = require('express');
const database = require('./db');
const cors = require('cors');

const app = express();


var corsOption = {
    origin: 'http://localhost:8080/'
}

app.use(cors(corsOption));


app.get('/categories', (req, res) => {
    database.query('SELECT * FROM Category', (err, result) => {
        if (err) throw err;
        const categories = JSON.stringify(result);
        return res.end(categories, function (err) {
            if (err) throw err;
        });

    });

});

app.get('category/:id', (req, res) => {
    const id = req.params.id;
    database.query('SELECT * FROM Category WHERE id = ' + id, (err, result) => {
        if (err) throw err;
        const categories = JSON.stringify(result);
        return res.end(categories, function (err) {
            if (err) throw err;
        });
    });

});
    module.exports = app;