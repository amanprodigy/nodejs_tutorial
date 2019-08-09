var fs = require('fs');

// this is synchronous
content = fs.readFileSync('readme.txt', 'utf8');

// this is asynchronous
fs.readFile('readme.txt', 'utf8', function(err, data){
  console.log(data);

  // this is asynchronous
  fs.writeFile('newoutput.txt', data, function(err){
    //console.log(err);

    // deletes the newly created output file
    fs.unlink('newoutput.txt', function(err){
      console.log(err);
    });

  });

});

console.log('test');
console.log(content);

// this is synchronous
fs.writeFileSync('output.txt', content, function(err){});

// delete synchronously a directory
fs.mkdir('deleteme', function(){
  fs.readFile('readme.txt', 'utf8', function(err, data){
    fs.writeFile('newoutput.txt', data, function(err){
      console.log(err);
    });
  });

});

fs.rmdir('deleteme', function(err){
  console.log(err);
});
