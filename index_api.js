'use strict';

var mysql = require('mysql');


var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'node'
});

var query = connection.query('SELECT id, content FROM test');

query.on('error', function(err) {
  console.log('A database error occurred:');
})
