const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('node:path')

app.on('ready', () => {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    icon: path.join(__dirname, 'assets', 'icon.ico'),
    autoHideMenuBar: true,
    webPreferences: {
      //preload: path.join(__dirname, 'preload.js')
    }
  })

  win.loadURL('http://localhost:8080')

  //win.loadFile(path.join(__dirname, '..', 'forecaster-app', 'dist', 'index.html'))
})