var bodyParser = require('body-parser');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/todo', {useNewUrlParser: true});

// Create a schema - blueprint of the data
var todoSchema = new mongoose.Schema(
  {
    item: String
  }
);
var Todo = mongoose.model('Todo', todoSchema);

//var itemOne = Todo({item: 'get flowers'}).save(function(err){
//  if(err) throw err;
//  console.log('Item saved');
//});

// middleware for handling post request parameters
var urlencodedParser = bodyParser.urlencoded({extended: false});

module.exports = function(app){

  app.get('/todo', function(req, res){

    Todo.find({}, function(err, data){
      if(err) throw err;
      res.render('todo', {todos: data});
    });

  });

  app.post('/todo', urlencodedParser, function(req, res){
    // create item in mongodb
    var newTodo = Todo(req.body).save(function(err, data){
      if(err) throw err;
      res.json(data);
    })
  });

  app.delete('/todo/:item', function(req, res){
    // delete the item from mongodb
    Todo.find({item: req.params.item.replace(/\-/g, " ")}).remove(
      function(err, data){
        if(err) throw err;
        res.json(data);
      }
    )
  });

};
