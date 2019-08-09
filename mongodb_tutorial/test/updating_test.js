
const mocha = require('mocha');
const assert = require('assert');
const Player = require('../models/players.js')

describe('Updating records', function(){

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

  it('Updates one player info in the database', function(done){

    Player.findOneAndUpdate({name: 'Messi'}, {name: 'Ronaldo'}).then(function(result){

      Player.findOne({_id: player._id}).then(function(result){
        assert(result.name === 'Ronaldo');
        done();
      });

    });

  });


  it('Increments the age by 1', function(done){

    Player.update({name: 'Messi'}, {$inc: {age: 1}}).then(function(result){

      Player.findOne({_id: player._id}).then(function(result){
        assert(result.age === player.age + 1);
        done();
      });

    });

  });

});
