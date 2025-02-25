const { app, BrowserWindow } = require('electron');

function createWindow() {
    let win = new BrowserWindow({
        width: 480,
        height: 555,
        webPreferences: {
            nodeIntegration: true  // ✅ Allows `renderer.js` to access `document`
        }
    });

    win.loadFile('index.html');  // ✅ Make sure `index.html` is in the same folder
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});
