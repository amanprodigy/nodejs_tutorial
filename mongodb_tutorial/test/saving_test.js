const mocha = require('mocha');
const assert = require('assert');
const Player = require('../models/players.js')

describe('Saving records', function(){

  // First test
  it('Saves records to the database', function(done){

    var player = new Player(
      {
        name: 'Messi',
        team: 'Barcelona',
        age: 30,
        position: 'Center Forward'
      }
    );

    player.save().then(function(){
      assert(player.isNew === false);
      done();
    });

  });

  // Second test
  it('adds two numbers', function(){
    assert(2 + 3 === 5);
  
  });


});
