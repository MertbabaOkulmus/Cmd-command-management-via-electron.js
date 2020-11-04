const btn=document.querySelector(".card-body .list-group");
const clic=document.querySelector(".btn.btn-danger");

clic.addEventListener("click",run);

loads();

function run_1(e){
  
      const li= document.createElement("li");
      const text=e;
      if(text==""){
      //     alrt("danger");
      }   
      else{
      li.textContent=text;
      const a=document.createElement("a")
      const i=document.createElement("i");
      i.classList="fa fa-remove";
      a.append(i);
      a.href="#";
      a.classList="delete-item";
      li.append(a);
      li.classList="list-group-item d-flex justify-content-between";
      btn.append(li);
      document.querySelector("#todo").value="";
      // addTodoToStorage(text);
      // alrt("success");
      }
    
}

function run(e){
  
      const li= document.createElement("li");
      const text=document.querySelector("#todo").value.trim();
      if(text==""){
          alrt("danger");
      }
      else{
      li.textContent=text;
      const a=document.createElement("a")
      const i=document.createElement("i");
      i.classList="fa fa-remove";
      a.append(i);
      a.href="#";
      a.classList="delete-item";
      li.append(a);
      li.classList="list-group-item d-flex justify-content-between";
      btn.append(li);
      document.querySelector("#todo").value="";
      addTodoToStorage(text);
      alrt("success");
      }
      e.preventDefault();
    
}

function alrt(cls){
      const div=document.createElement("div");
      div.classList= `alert alert-${cls}`;
      div.innerHTML=" <strong>Oh snap!</strong> Change a few things up and try submitting again.";
      const cardbdy=document.querySelector(".card-body");
      cardbdy.append(div);
      setTimeout(function(){
            div.remove();
      },1000);
}

function addTodoToStorage(newTodo){
            let todos=getTodosFromStorage();
            todos.push(newTodo);
            localStorage.setItem("todos",JSON.stringify(todos));
}

function getTodosFromStorage(){//Storagedan Todoları Alma
      let todos;
            if(localStorage.getItem("todos")===null){
                  todos=[];
            }
            else{
                  todos=JSON.parse(localStorage.getItem("todos"));                 
            }
            return todos;  
}

function loads(){
     
      getTodosFromStorage().forEach(function(e){
            // console.log(e)
           run_1(e);
         });
}


const cardbady_2=document.querySelector(".list-group .list-group-item .delete-item"); 

cardbady_2.addEventListener("click",runs);


function runs(e){
    if(e.target.classList="delete-item"){
         e.target.remove();
    }
}


      
     
