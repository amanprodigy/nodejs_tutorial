var utils = require('util');
var events = require('events');

var Person = function(name){
  this.name = name;
};

// any object can inherit any other object
// eventemitter is just an event
utils.inherits(Person, events.EventEmitter);

var james = new Person('james');
var aman = new Person('aman');
var richa = new Person('richa');

var people = [james, aman, richa];

// assign each of the people instance the EventEmitter object
var i = 0;
people.forEach(function(person){
  person.on('speak', function(msg){
    console.log(person.name + ' said: ' + msg);
  });
  person.on('write', function(msg){
    console.log(person.name + ' wrote: ' + msg);
  });
});

james.emit('speak', 'Hey dude, wassup');
aman.emit('speak', 'come here');
richa.emit('speak', 'food is on the table');

james.emit('write', 'Hey dude, wassup writing');
aman.emit('write', 'come here writing');
richa.emit('write', 'food is on the table writing');
