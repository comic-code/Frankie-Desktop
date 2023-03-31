const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('electron',
  {
    openWindow: (route) => ipcRenderer.send('open-window', route)
  }
)