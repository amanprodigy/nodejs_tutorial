// http://www.sqlitetutorial.net/sqlite-nodejs/connect/

const sqlite3 = require('sqlite3').verbose();
const fs = require('fs')
const path = require('path');
let dbPathName = path.join(__dirname, 'tallyconnector.db');

function connectDB(){
  // open database in filesystem
  let db = new sqlite3.Database(dbPathName, sqlite3.OPEN_READWRITE, function(err){
    if(err){
      return console.log(err.message);
    }
    console.log('Connected to the Sqlite database');
  });
}



function closeDB(){
  // close the database connection
  db.close((err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log('Close the database connection.');
  });
}

module.exports = {
  connectDB: connectDB,
  closeDB: closeDB
}
