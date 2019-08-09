const mocha = require('mocha');
const assert = require('assert');
const Player = require('../models/players.js')

describe('Deleting records', function(){

  var player;

  beforeEach(function(done){

    player = new Player(
      {
        name: 'Messi',
        team: 'Barcelona',
        age: 30,
        position: 'Center Forward'
      }
    );

    player.save().then(function(){
      done();
    });

  });

  it('Delete one player from the database', function(done){

    Player.findOneAndRemove({name: 'Messi'}).then(function(result){

      Player.findOne({name: 'Messi'}).then(function(result){
        assert(result === null);
        done();
      });

    });

  });

});
