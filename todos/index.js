const electron = require("electron");

const { BrowserWindow, app, Menu } = electron;

let mainWindow;
let addWindow;

app.on("ready", () => {
  mainWindow = new BrowserWindow({});
  mainWindow.loadURL(`file://${__dirname}/main.html`);

  const mainMenu = Menu.buildFromTemplate(menuTemplate);
  Menu.setApplicationMenu(mainMenu);
});

function createAddWindow() {
  addWindow = new BrowserWindow({
    width: 300,
    height: 200,
    title: "Add new To-do"
  });
}

const menuTemplate = [
  {
    label: "File",
    submenu: [
      {
        label: "New To-Do",
        click() {
          createAddWindow();
        }
      },
      {
        label: "Quit",
        // Iife, yo
        accelerator: process.platform === "darwin" ? "Command+Q" : "Ctrl+Q",
        click() {
          app.quit();
        }
      }
    ]
  }
];
