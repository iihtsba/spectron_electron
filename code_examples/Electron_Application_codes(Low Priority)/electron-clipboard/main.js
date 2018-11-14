const {app, BrowserWindow} = require('electron') 
const url = require('url') //url module is in NodeJS
const path = require('path')  //path module is in NodeJS

let win  

function createWindow() { 
   win = new BrowserWindow({width: 800, height: 600}) 
   win.loadURL(url.format ({ 
      pathname: path.join(__dirname, 'index.html'), 
      protocol: 'file:', 
      slashes: true 
   })) 
}  

app.on('ready', createWindow) 