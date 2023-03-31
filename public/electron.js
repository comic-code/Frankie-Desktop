const { app, BrowserWindow, ipcMain, screen } = require('electron');
const path = require('path');
const isDev = require('electron-is-dev');

const defaultWindow = {
  title: 'Frankie',
  width: 400,
  height: 400,
  x: 0,
  y: 0, 
  movable: false,
  frame: false,
  alwaysOnTop: true,
  webPreferences: {
    nodeIntegration: false,
    contextIsolation: true,
    worldSafeExecuteJavaScript: true,
    preload: path.join(__dirname, 'preload.js')
  },
  resizable: false,
  transparent: true
};

let navWindow = null;
let configWindow = null;
let todoWindow = null;

function createWindow(windowType = 'nav') {
  const { width, height } = screen.getPrimaryDisplay().workAreaSize;
  const isConfigWindow = windowType === 'config';
  const isTodoWindow = windowType === 'todo';

  const windowOptions = 
    isConfigWindow ? { ...defaultWindow, title: 'Frankie - Configuração', y: height, height: 300 }
    : isTodoWindow ? { ...defaultWindow,title: 'Frankie - A Fazer', }
    : { ...defaultWindow, x: (width - 300) / 2, width: 300, height: 54 };

  const windowURL = isDev
    ? `http://localhost:3000?${windowType}`
    : `file://${path.join(__dirname, "../build/index.html?" + windowType)}`;
  
  const existingWindow  = 
    isConfigWindow ? configWindow 
    : isTodoWindow ? todoWindow 
    : navWindow;
    
  if (existingWindow) {
    existingWindow.isVisible() ? existingWindow.hide() : existingWindow.show();
  } else {
    const newWindow = new BrowserWindow(windowOptions);
    newWindow.loadURL(windowURL);
    if (isConfigWindow) {
      configWindow = newWindow;
    } else if(isTodoWindow) {
      todoWindow = newWindow;
    } else {
      navWindow = newWindow;
    }
  }
}

ipcMain.on('open-window', async (event, windowType) => createWindow(windowType));

app.whenReady().then(() => {
  createWindow();
});