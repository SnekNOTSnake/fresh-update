/**
 * @type {import('electron-builder').Configuration}
 * @see https://www.electron.build/configuration/configuration
 */
module.exports = {
	appId: 'com.sneknotsnake.fresh-updater',
	productName: 'Fresh Update App',
	copyright: 'Copyright © 2022 ${author}',
	asar: true,
	directories: {
		output: 'release/${version}',
	},
	files: ['packages'],
	win: {
		target: [
			{
				target: 'nsis',
				arch: ['x64'],
			},
		],
		artifactName: 'v${version}-${name}.${ext}',
	},
	mac: {
		target: ['dmg'],
		artifactName: 'v${version}-${name}.${ext}',
	},
	linux: {
		target: ['AppImage'],
		artifactName: 'v${version}-${name}.${ext}',
		category: 'Utility',
	},
}
