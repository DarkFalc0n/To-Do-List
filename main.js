const { app, BrowserWindow } = require('electron');
const createWindow = () => {
    const win = new BrowserWindow({
      transparent: true, 
      frame: false,
      width: 360,
      height: 650
    })
  
    win.loadFile('index.html')
}
app.whenReady().then(() => {
    createWindow()
})
  