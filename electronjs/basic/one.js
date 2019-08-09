console.log('From one.js');

const BrowserWindow = require('electron').remote.BrowserWindow;
const path = require('path');
const url = require('url');

const newWindowBtn = document.getElementById('newWindowButton');

const windowOptions = {
  width: 400,
  minWidth: 200,
  height: 300,
  title: 'Popup window',
  webPreferences: {
    nodeIntegration: true
  }
}
newWindowBtn.addEventListener('click', function(event){

  let winThree = new BrowserWindow();

  winThree.loadURL(url.format({
    pathname: path.join(__dirname, 'three.html'),
    protocol: 'file:',
    slashes: true
  }));

});
