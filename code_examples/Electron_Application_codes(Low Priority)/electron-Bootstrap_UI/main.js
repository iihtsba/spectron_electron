const {app, BrowserWindow} = require('electron') //electron
const url = require('url') //nodeJS
const path = require('path')  //nodeJS

let win, win1 

function myCreateWindow() { 
   win = new BrowserWindow({width: 800, height: 600}) 
   win.loadURL(url.format ({ 
      pathname: path.join(__dirname, 'index.html'), 
      protocol: 'file:', 
      slashes: true 
   })) 
}  

app.on('ready', myCreateWindow) 