const remote = require('electron').remote;

function CloseIt() {
    const  mainWindow = remote.getCurrentWindow();
    mainWindow.close();
}