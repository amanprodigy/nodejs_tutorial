const mongoose = require('mongoose');

// ES6 Promises
// Have to check if this is required any more
mongoose.Promise = global.Promise;


// Connecting to MongoDb
mongoose.connect('mongodb://localhost/tutorial');

mongoose.connection.once('open', function(){
  console.log('Connection has been made with mongodb');
}).on('error', function(){
  console.log('Connection error');
});
