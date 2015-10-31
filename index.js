'use strict';

var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'node'
});

connection.query(
  'SELECT id, content FROM test',
  function(err, results, fields) {
    if(err) {
      console.log('A database error occurred!');
    } else {
      console.log(results);
    }
    connection.end();
  }
);
