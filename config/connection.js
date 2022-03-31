const mysql = require('mysql');

// create here mysql connection

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'upilbusuk14',
    database: 'petstore'
});

connection.connect(function(error){
    if(error) throw error;
    console.log('Database Connected Successfully!!!');
})

module.exports = connection;

