const { app, BrowserWindow } = require('electron')

function createWindow () {
    // 创建浏览器窗口
    let win = new BrowserWindow({
        width: 200,
        height: 200,
        frame:false,
        transparent:true,
        webPreferences: {
            nodeIntegration: true
        }
    })

    // 加载index.html文件
    win.loadFile('index.html')
}

app.on('ready', createWindow)