import path from "path";
import { app, BrowserWindow } from "electron";

let mainWindow:BrowserWindow;

function createWindow() {
	// Create the browser window.
	mainWindow = new BrowserWindow({
		width: 800,
		height: 600,
		webPreferences: {
			nodeIntegration: true,
			nodeIntegrationInWorker: true,
			contextIsolation: false,
		}
	});
	
	mainWindow.setTitle("Wizard");
	mainWindow.removeMenu();
	
	// and load the index.html of the app.
	mainWindow.loadFile('../index.html');

	// Open the DevTools.
	mainWindow.webContents.openDevTools()
}

if(app.requestSingleInstanceLock()){
	// This method will be called when Electron has finished
	// initialization and is ready to create browser windows.
	// Some APIs can only be used after this event occurs.
	app.whenReady().then(function(){
		createWindow()
		
		app.on('activate', function () {
			// On macOS it's common to re-create a window in the app when the
			// dock icon is clicked and there are no other windows open.
			if(BrowserWindow.getAllWindows().length === 0) createWindow();
		});
	});
}else{
	app.quit();
}

app.on('second-instance', (_event, _commandLine, _workingDirectory) => {
	// Someone tried to run a second instance, we should focus our window.
	if(!mainWindow) return;
	if(mainWindow.isMinimized()) mainWindow.restore()
	mainWindow.focus()
});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', function() {
	if(process.platform !== 'darwin'){
		app.quit();
	}
});

process.on("unhandledRejection", e => { throw e; });

try {
	require('electron-reloader')(module, {
		ignore: 'src',
	});
} catch {}
