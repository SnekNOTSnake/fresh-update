const { app } = require('electron')

const { default: createMainWindow, win } = require('./window')

app.on('ready', () => {
	createMainWindow()

	app.on('activate', () => {
		if (win === null) createMainWindow()
	})
})

app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') app.quit()
})
