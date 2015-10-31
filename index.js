'use strict';

// require Felix Geisendorfer's mysql library
var mysql = require('mysql');

// created connection object
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root'
});

//  the anonymous function is called when node,js receives an answer to the query
connection.query(
  'SELECT "foo" AS first_field, "bar" AS second_field',
  function (err, results, fields) {
    // results is an array of objects
    // each obj is a row, each atribute is a field of the row
    console.log(err);
    console.log(results);
    console.log(results[0].first_field);
    connection.end();
  }
);

// simple error handling
connection.query(
  'SLECT "foo" AS first_field, "bar" AS second_field',
  function(err, results, fields) {
    if(err) {
      console.log('A database error occurred!');
    } else {
      console.log(results);
      console.log(fields);
    }
    connection.end();
  }
);
