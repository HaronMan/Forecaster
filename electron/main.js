const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('node:path')
const Database = require('better-sqlite3')
const fs = require('fs')

function createWindow() {
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
}

const dbPath = path.join(app.getPath('documents'), 'forecaster.db')
let db;

function createDB() {
  if (!fs.existsSync(dbPath)) {
    db = new Database(dbPath);
    db.exec(`
      CREATE TABLE IF NOT EXISTS transactions (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        montant INTEGER NOT NULL,
        notes TEXT NOT NULL,
        date TEXT NOT NULL
      )
    `);
  }
}

app.whenReady().then(() => {
  createDB();
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

// Réception des requêtes pour accéder aux données
ipcMain.handle('get-users', () => {
  /*
  const stmt = db.prepare('SELECT * FROM users');
  return stmt.all();4
  */
});

ipcMain.handle('add-user', (event, user) => {
  /*
  const stmt = db.prepare('INSERT INTO users (name, email) VALUES (?, ?)');
  const result = stmt.run(user.name, user.email);
  return result.lastInsertRowid;
  */
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});