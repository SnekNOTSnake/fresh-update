const path = require('path')
const { BrowserWindow } = require('electron')

let win = null

const createMainWindow = () => {
	win = new BrowserWindow({
		show: false,
		width: 1600,
		height: 900,
		autoHideMenuBar: true,
	})

	win.loadURL(`file://${path.resolve(__dirname, '../renderer/index.html')}`)

	win.on('ready-to-show', () => {
		if (!win) throw new Error('"mainWindow" is not defined')

		if (process.env.START_MINIMIZED) win.minimize()
		else win.show()
	})

	win.on('closed', () => (win = null))

	return win
}

module.exports = {
	default: createMainWindow,
	win,
}
