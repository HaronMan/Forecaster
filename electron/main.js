const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('node:path')
const Database = require('better-sqlite3')
const fs = require('fs')

app.on('ready', () => {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    maximized: true,
    icon: path.join(__dirname, 'assets', 'icon.ico'),
    autoHideMenuBar: true,
    webPreferences: {
      nodeIntegration: false
    }
  })

  win.maximize()
  win.loadFile(path.join(__dirname, '..', 'forecaster-app', 'dist', 'index.html'))
})