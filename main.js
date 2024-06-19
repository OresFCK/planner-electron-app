// main.js
const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const url = require('url');

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: false,
      contextIsolation: true,
    },
  });

  mainWindow.loadURL('http://localhost:3000'); 

  ipcMain.on('form-data', (event, data) => {
    mainWindow.webContents.send('form-data-response', data);
  });
}

app.on('ready', createWindow);
