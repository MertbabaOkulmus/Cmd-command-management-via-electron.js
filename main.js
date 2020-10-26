const electron =require("electron");
const url=require("url");
const path=require("path");
const { BrowserWindow, protocol, Menu, ipcMain} = require("electron");
const { mainModule } = require("process");
const {app}=electron;

let mainWindow;//ana sayfamız
let addWindow;
app.on('ready',()=>{
    // mainWindow=new BrowserWindow({});
    mainWindow = new BrowserWindow({
        webPreferences: {
                nodeIntegration: true
              }
        });
    mainWindow.loadURL(//main sayfasının url inin nerden alınacağını belirtiriz
        url.format({
            pathname:path.join(__dirname,"todo.html"),//pathname dosya yerini belirtmek için kullanılır , __dirname=bu dosyanın fiziksel olarak çalıştığı yolu + index.html dosyasını birleştir
            protocol:"file", 
            slashes:true
        })
    )

    const mainMenu=Menu.buildFromTemplate(mainMenuTemplate);
    Menu.setApplicationMenu(mainMenu);//yukarıda bizim oluşturduğumuz mainMenu yu Menu ye entegre ediyoruz

    ipcMain.on("key",(err,data)=>{
        console.log(data);
    })

    ipcMain.on("key:newWindow",()=>{
        createWindow();
    })

    mainWindow.on("close",()=>{// ana pencere close event i gönderdi ise yani kapandı ise 
        app.quit(); // uygulamayı tamamen kapat
    })

    ipcMain.on("key:close",() => {
        addWindow.close();
        addWindow =null;
    })

    ipcMain.on("key:save",(err,data)=>{
        console.log(data);
    })

    ipcMain.on("key:reading",(err_1,data_1)=>{
        console.log(data_1);
    })

    ipcMain.on("key:cmd_run",(err,data)=>{
        console.log(data);
    })
});

function createWindow(){
    addWindow = new BrowserWindow({
        width : 500,
        height :500,
        title:"Yeni bir pencere",
        webPreferences: {
                nodeIntegration: true
              }
        });
    addWindow.loadURL(url.format({
        pathname :path.join(__dirname ,"second.html"),
        protocol :"file:",
        slashes :true
    }))
    addWindow.on("close",()=>{
        addWindow=null;
    })
}

const mainMenuTemplate= [
    {
        label:"Dosya",
        submenu:[//Dosyanın altında da menuler olucaksa submenu ile belirtilir
             {
                 label:"Yeni Todo Ekle"
             },
             {
                 label:"Tüm Sil"
             },
             {
                 label:"Çıkış"
             }
        ]}
    ]//menumuz ary olucak herbir elemanımız da obje olarak belirtilicek