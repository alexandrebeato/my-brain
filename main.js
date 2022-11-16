const { app, BrowserWindow } = require('electron');
const _taskRepository = require('./repository/task.repository');
const { v4: uuidv4 } = require('uuid');
const { TaskModel } = require('./models/task.model');

function createWindow() {
  const win = new BrowserWindow({
    width: 1280,
    height: 729,
    resizable: false,
    maximizable: false,
    center: true,
  });

  win.loadFile('index.html');
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

