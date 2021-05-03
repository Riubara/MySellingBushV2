const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'MySellingBush'
});

connection.connect((err) => {
    if (err) throw err;
    console.log('db connect');
});

module.exports = connection;