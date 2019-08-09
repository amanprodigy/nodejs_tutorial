console.log('From main.js');
const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const path = require('path');
const url = require('url');

const windowOptions = {
  width: 450,
  minWidth: 250,
  frame: false,
  height: 150,
  title: app.getName(),
  webPreferences: {
    nodeIntegration: true
  },
  show: false
}


// create a window to show in the ui
let win;

function createWindow(){

  win = new BrowserWindow(windowOptions);

  win.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }));

  win.on('closed', () => {
    win = null;
  });

  win.once('ready-to-show', ()=>{
    win.show();
  });

  //win.webContents.openDevTools();

};

// create the window when electron app is ready
app.on('ready', createWindow);

// Let mac windows properly be closed when closed
app.on('window-all-closed', () =>{
  if(process.platform != 'darwin'){
    app.quit();
  }
});

// Create window if the app is in the dock of macos
app.on('activate', () =>{

  if(win === null ){
    createWindow();
  }

});
