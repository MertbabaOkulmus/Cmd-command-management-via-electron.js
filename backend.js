      const electron=require("electron");
      const {ipcRenderer}=electron; //  ipcRenderer veri göndermeye yarar

    //   let setBtn=document.querySelector("#sendBtn");
    //   setBtn.addEventListener("click",()=>{
    //         alert("kdmsk");
    //         ipcRenderer.send("key","Veri Aktarımı Denemesi Başarılı Bir Şekilde Gerçekleştirilmiştir...");
    //   });

    // let setInpt=document.querySelector("#inpt");
    // let setBtn=document.querySelector("#sendBtn");
    //   setBtn.addEventListener("click",()=>{
    //         alert("kdmsk");
    //         // ipcRenderer.send("key",setIn);
    //   });


    let openNew=document.querySelector("#openNewBtn");

    openNew.addEventListener("click",()=>{
       ipcRenderer.send("key:newWindow");//main.js e verilerin gittiği komut
      });
   