console.log('From index.js');
electron = require('electron');

const BrowserWindow = electron.remote.BrowserWindow;
const path = require('path');
const fs = require('fs');
const url = require('url');
const shell = electron.shell;

const shell_btn = document.getElementById('shell_btn');
shell_btn.addEventListener('click', function(){
  //shell.showItemInFolder('/usr/local/Cellar/httpie/1.0.2/AUTHORS.rst');
  //shell.openItem('/usr/local/Cellar/sqlite/3.29.0/README.txt');
  shell.openExternal('https://github.com');
});

btnCreate = document.getElementById('btnCreate');
btnRead = document.getElementById('btnRead');
btnDelete = document.getElementById('btnDelete');
filename = document.getElementById('filename');
filecontents = document.getElementById('filecontents');

let pathName = path.join(__dirname, 'Files');

btnCreate.addEventListener('click', function(){
  let file = path.join(pathName, filename.value);
  let contents = filecontents.value;
  fs.writeFile(file, contents, function(err){
    if(err){
      return console.log(err);
    }
    console.log('File ' + file + ' was created');
  });
});

btnRead.addEventListener('click', function(){
  let file = path.join(pathName, filename.value);
  fs.readFile(file, function(err, data){
    if(err){
      return console.log(err);
    }
    filecontents.value = data;
    console.log("The file was read!");
  });
});


btnDelete.addEventListener('click', function(){
  let file = path.join(pathName, filename.value);
  fs.unlink(file, function(err){
    if(err){
      return console.log(err);
    }
    filename.value = '';
    filecontents.value = '';
    console.log("The file was deleted!");
  });
});
