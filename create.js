'use strict';

var mysql = require('mysql');

var connection = mysql.createConnection({
  host: '127.0.0.1',
  user: '',
  password: 'root'
});

connection.query('DROP DATABASE IF EXISTS node', function(err) {
  if(err) {
    console.log('Could not drop database "node".');
    console.log(err);
  }
});

connection.query('CREATE DATABASE node', function(err) {
  if(err) {
    console.log('Could not create database "node".');
  }
});

connection.query('USE node', function(err) {
  if(err) {
    console.log('Could not switch to database "node".');
  }
});

connection.query('CREATE TABLE test ' +
                 '(id INT(11) AUTO_INCREMENT, ' +
                 ' content VARCHAR(255), ' +
                 ' PRIMARY KEY(id))',
  function(err) {
    if(err) {
      console.log('Could not create table "test".');
    }
  }
);

connection.query('INSERT INTO test (content) VALUES ("Hello")');
connection.query('INSERT INTO test (content) VALUES ("World")');

connection.end();

//  This is run once to set up a new DB
