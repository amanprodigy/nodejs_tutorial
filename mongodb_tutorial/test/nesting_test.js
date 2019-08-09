const assert = require('assert');
const mongoose = require('mongoose');
const Author = require('../models/author');


describe('Nesting records', function(){

beforeEach(function(done){

  mongoose.connection.collections.authors.drop(function(){
    done();
  });

});

  it('Creates an author with sub documents', function(done){

    var raymond = new Author({
        name: 'Raymond Kissinger',
        age: 43,
        posts: [
          {
            title: 'Updates of Python3',
            body: 'Python3 is faster than python2',
            created_at: new Date(),
            published_at: new Date(),
            comments: [
              {
                text: 'Awesome stuff Raymond!',
                person: 'Aman',
                posted_at: new Date(),
                accepted: true
              },
              {
                text: 'Thank you for this!',
                person: 'Rahul',
                posted_at: new Date(),
                accepted: false
              }
            ]
          }
        ]
    });

    raymond.save().then(function(){
      Author.findOne({name: 'Raymond Kissinger'}).then(function(author_record){
        assert(author_record.posts.length === 1);
        done();
      });
    });
  
  });
  // create author test ends

  it('adds a post to an author', function(done){
    var raymond = new Author({
        name: 'Raymond Kissinger',
        age: 43,
        posts: [
          {
            title: 'Updates of Python3',
            body: 'Python3 is faster than python2',
            created_at: new Date(),
            published_at: new Date(),
            comments: [
              {
                text: 'Awesome stuff Raymond!',
                person: 'Aman',
                posted_at: new Date(),
                accepted: true
              },
              {
                text: 'Thank you for this!',
                person: 'Rahul',
                posted_at: new Date(),
                accepted: false
              }
            ]
          }
        ]
    });

    raymond.save().then(function(){

      Author.findOne({name: 'Raymond Kissinger'}).then(function(author_record){

        // add a post to the posts collection
        author_record.posts.push({
            title: 'Python3 speed tests',
            body: 'Python 3 has been extensively tested and outperformed all languages',
            created_at: new Date(),
            published_at: new Date(),
            comments: [],
        });

        author_record.save().then(function(){
          Author.findOne({name: 'Raymond Kissinger'}).then(function(result){
            console.log('here');
            assert(result.posts.length === 2);
            done();
          });
        });

      });

    });

  });
  // add post test ends

})
