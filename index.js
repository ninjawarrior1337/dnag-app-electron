const {ipcRenderer} = require('electron')

lsign = document.getElementById("signin").onclick = function(){
    ipcRenderer.send('show-login')
}
