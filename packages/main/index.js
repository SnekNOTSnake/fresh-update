const { app } = require('electron')
const { autoUpdater } = require('electron-updater')

const { default: createMainWindow, win } = require('./window')

app.on('ready', () => {
	createMainWindow()

	autoUpdater.checkForUpdatesAndNotify()

	app.on('activate', () => {
		if (win === null) createMainWindow()
	})
})

app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') app.quit()
})
