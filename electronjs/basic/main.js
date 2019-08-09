console.log('From main.js');
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

  win_one = new BrowserWindow(windowOptions);
  win_two = new BrowserWindow(
    {
      width: 1080,
      minWidth: 680,
      height: 840,
      title: app.getName(),
      webPreferences: {
        nodeIntegration: true
      },
      parent: win_one,
      show: false // dont show by default, later shown when ready
    }
  );

  win_one.loadURL(url.format({
        pathname: path.join(__dirname, 'one.html'),
        protocol: 'file:',
        slashes: true
  }));

  win_two.loadURL('https://github.com/');
  win_two.once('ready-to-show', ()=>{
    win_two.show();
  });


  win_one.webContents.openDevTools();
  //win_two.webContents.openDevTools();

  win_one.on('closed', () => {
    win_one = null;
  });

  win_two.on('closed', () => {
    win_two = null;
  });

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
  if(win_one === null ){
    createWindow();
  }
  if(win_two === null ){
    createWindow();
  }
});
