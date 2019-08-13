const {connectDB, closeDB} = require('./db_connection')
const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const path = require('path');
const url = require('url');

const windowOptions = {
  width: 1080,
  minWidth: 680,
  height: 840,
  title: app.getName(),
  webPreferences: {
    nodeIntegration: true
  }
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

  win.webContents.openDevTools();

  win.on('closed', () => {
    win = null;
  });

};

// create the window when electron app is ready
app.on('ready', function(){
  createWindow();
  connectDB();
  closeDB();
});

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
