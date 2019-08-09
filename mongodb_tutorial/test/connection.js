const mongoose = require('mongoose');

// ES6 Promises
// Have to check if this is required any more
mongoose.Promise = global.Promise;


// Run this block before running any test
before(function(done){

  // Connecting to MongoDb
  mongoose.connect(
    'mongodb://localhost/tutorial',
    { useNewUrlParser: true }
  );

  // Test the connection
  mongoose.connection.once('open', function(){

    console.log('Connection has been made with mongodb');
    // Tell mocha that the test has finished
    done();

  }).on('error', function(error){

    console.log('Connection error: ' + error);

  });

});

// Drop the players collection before each test
beforeEach(function(done){

  // Drop the collection
  mongoose.connection.collections.players.drop(function(){
    done();
  });

});

