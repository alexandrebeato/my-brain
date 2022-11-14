const { app, BrowserWindow } = require('electron');
const _repository = require('./repository/repository');

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

  _repository.Insert('users.json', {
    id: 1,
    name: 'Alexandre Beato',
    email: 'alebeato9@gmail.com',
  });

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
