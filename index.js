'use strict';

var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  // the db can be specified in the connection so it doesn't have to be specified in the queries
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
