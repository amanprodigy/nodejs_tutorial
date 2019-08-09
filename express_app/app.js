var express = require('express');
var bodyParser = require('body-parser');

var app = express();

var urlencodedParser = bodyParser.urlencoded({extended: false});

app.set('view engine', 'ejs');
// express.static is a middleware that includes
// all the static files contained in a given folder 
// and exposes them to the respective url
app.use('/assets', express.static('assets'));

//app.use('/assets', function(req, res, next){
//  console.log(req.url);
//  next();
//});

app.get('/', function(req, res){
  //res.send('This is the home page');
  //res.sendFile(__dirname + '/index.html');
  res.render('index');
});

app.get('/contact', function(req, res){
  //res.send('This is the contact page');
  //res.sendFile(__dirname + '/contact.html');
  qs = req.query;
  res.render('contact', qs);
});

app.post('/contact', urlencodedParser, function(req, res){
  qs = {company: req.body.company, email: req.body.email, dept: req.body.department};
  res.render('contact-success', qs);
});

app.get('/profile/:name', function(req, res){
  //res.send('Profile ' + req.params.id + ' details requested.');
  var data = {age: 30, skill: 'dribbler, scorer', hobbies: ['cycling', 'wrestling', 'dining']};
  res.render('profile', {person: req.params.name, data: data});
});


app.listen(3000);
