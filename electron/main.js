const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('node:path')

const createWindow = () => {
    const win = new BrowserWindow({
      width: 1200,
      height: 800,
      webPreferences: {
        //preload: path.join(__dirname, 'preload.js')
      }
    })
  
    win.loadFile(path.join(__dirname, '..', 'forecaster-app', 'dist', 'index.html'))

    win.webContents.openDevTools()
}

app.whenReady().then(() => {
    createWindow()
})