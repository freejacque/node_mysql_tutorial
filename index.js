'use strict';

// require Felix Geisendorfer's mysql library
var mysql = require('mysql');

// created connection object
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root'
});

connection.query(
  'SELECT "foo" AS first_field, "bar" AS second_field',
  function (err, results, fields) {
    console.log(results);
    connection.end();
  }
);
