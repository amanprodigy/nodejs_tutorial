
const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const path = require('path');
const url = require('url');
const Menu = electron.Menu;
const MenuItem = electron.MenuItem;

app.on('ready', function(){

  createWindow();

  const template = [
    {
      label: 'View',
      submenu: [
        { role: 'reload' },
        { role: 'forcereload' },
        { role: 'toggledevtools' },
        { type: 'separator' },
        { role: 'resetzoom' },
        { role: 'zoomin' },
        { role: 'zoomout' },
        { type: 'separator' },
        { role: 'togglefullscreen' }
      ]
    },
    {
      label: 'Window',
      submenu: [
        { role: 'minimize' },
        { role: 'zoom' },
      ]
    },
    {
      label: 'Demo',
      submenu: [
        { label: 'Submenu 1',
          click: function(){
            console.log('clicked');
          }
        },
        { role: 'zoom' },
        {
          label: 'Help',
          click: function(){
            electron.shell.openExternal('http://electron.atom.io');
          }
        }
      ]
    },
  ];
  
  const menu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(menu);
  ctxMenu = new Menu();
  ctxMenu.append(new MenuItem(
      {
        label: 'Hello',
        click: function(){
          console.log('Context menu item clicked');
        }
      }
  ));

  win.webContents.on('context-menu', function(e, params){
    ctxMenu.popup(win, params.x, params.y);
  });

});

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
