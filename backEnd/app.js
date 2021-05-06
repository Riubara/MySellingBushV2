const express = require('express');
const database = require('./db');
const cors = require('cors');

const app = express();


var corsOption = {
    origin: 'http://localhost:8080'
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

app.get('/category/:id', (req, res) => {
    const id = req.params.id;
    database.query('SELECT * FROM Category WHERE id = ' + id, (err, result) => {
        if (err) throw err;
        const categories = JSON.stringify(result);
        return res.end(categories, function (err) {
            if (err) throw err;
        });
    });

});


app.get('/subcategories', (req, res) => {
    database.query('SELECT * FROM SubCategory', (err, result) => {
        if (err) throw err;
        const categories = JSON.stringify(result);
        return res.end(categories, function (err) {
            if (err) throw err;
        });

    });
});

app.get('/subcategory/:id', (req, res) => {
    const id = req.params.id;
    database.query('SELECT * FROM SubCategory WHERE CategoryID = ' + id, (err, result) => {
        if (err) throw err;
        const categories = JSON.stringify(result);
        return res.end(categories, function (err) {
            if (err) throw err;
        });
    });

});

app.get('/products', (req, res) => {
    database.query('SELECT * FROM Produit', (err, result) => {
        if (err) throw err;
        const categories = JSON.stringify(result);
        return res.end(categories, function (err) {
            if (err) throw err;
        });

    });
});

app.get('/products/:id', (req, res) => {
    const id = req.params.id;
    database.query('SELECT * FROM Produit INNER JOIN subcategory ON produit.IDSubCategory = subcategory.ID WHERE subcategory.CategoryID = ' + id, (err, result) => {
        if (err) throw err;
        const categories = JSON.stringify(result);
        return res.end(categories, function (err) {
            if (err) throw err;
        });
    });

});

module.exports = app;