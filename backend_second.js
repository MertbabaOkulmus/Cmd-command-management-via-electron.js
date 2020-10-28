const electron=require("electron");
const {ipcRenderer}=electron;
const fileBusiness=require("fs");
const { exec } = require("child_process");
const { stdout } = require("process");

let cancelWin=document.querySelector("#btn-cancel");
let saveBtn=document.querySelector("#btn-get");
let valueGet=document.querySelector("#valueGet");
let btn_run=document.querySelector("#btn-run");
let cmd_text=document.querySelector("#cmd-text");

// saveBtn.addEventListener("click",()=>{
//     ipcRenderer.send("key:save",valueGet.value);
// })

cancelWin.addEventListener("click",()=>{
      ipcRenderer.send("key:close");
});

saveBtn.addEventListener("click",log());


btn_run.addEventListener("click",(e)=>{
    console.debug("selamlar click",
     valueGet.value)
    ipcRenderer.send("key:cmd_run",exec(valueGet.value, (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return error;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return stderr;
        }
        console.log(`stdout: ${stdout}`); 
        log(stdout);
        cmd_text.value=stdout;
        return stdout
       
        }     
     )
    )
    
})

function log(stdout){
    ipcRenderer.send("key:reading",fileBusiness.appendFile("cmd_log.txt",stdout, (error) => {
        if (error)
            console.log(error.message);
        console.log("İşlem başarılı...");
    }))
}

// var exec = require('child_process').exec;

// exec('php main.php', function (error, stdOut, stdErr) {
//     // do what you want!
//     var commandtoRun = "C:\\Winnt\\Notepad.exe";
// })

//-----------------------------------------------------------------

// Instantiate the Shell object and invoke its execute method.

// btn_run.addEventListener("click",()=>{
//    var oShell = new ActiveXObject("Shell.Application");
//    var commandtoRun = "C:\Users\\mertb\\ELECTRON\\index.html";
//    if (inputparms != "") {
//        var commandParms = document.Form1.filename.value;
//     }  

//     ipcRenderer.send("key:cmd_run",oShell.ShellExecute(commandtoRun, commandParms, "", "open", "1"))
//     })

//-----------------------------------------------------------------





