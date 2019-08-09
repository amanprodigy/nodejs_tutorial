
const mocha = require('mocha');
const assert = require('assert');
const Player = require('../models/players.js')

describe('Finding records', function(){

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
      assert(player.isNew === false);
      done();
    });

  });

  it('Finds player by name in the database', function(done){
    Player.findOne({name: 'Messi'}).then(function(result){
      assert(result.name === 'Messi');
      done();
    });
  });

  it('Finds player by id in the database', function(done){
    Player.findOne({_id: player._id}).then(function(result){
      assert(result._id.toString() === player._id.toString());
      done();
    });
  });

});
