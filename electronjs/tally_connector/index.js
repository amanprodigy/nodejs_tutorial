const electron = require('electron');
console.log('From index.js');

const BrowserWindow = electron.remote.BrowserWindow;
const path = require('path');
const url = require('url');


const dbConnect = document.getElementById('dbConnect');

dbConnect.addEventListener('click', function(){
  // TODO
});
