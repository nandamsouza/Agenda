var btnClick = document.querySelector('#btnClick');
//add-tarefa
function addtask() {
    const texto = document.querySelector("#texto").value;

    if(texto) {

        const lista = document.querySelector(".template");
        const li = lista.cloneNode(true);
        
        li.querySelector(".task").textContent = texto;
        li.classList.remove("template");
        li.classList.remove("hide");

        const ul = document.querySelector("#lista");
        
        ul.appendChild(li);

//remover-task
        const btn_remove = li.querySelector(".remove_btn").addEventListener("click", function() {
         remove_task(this);
        });

//completar-task
        const btn_add = li.querySelector(".add_btn").addEventListener("click", function() {
         completetask(this);
         
        });


//limpa-input
        texto = document.querySelector("#texto").value = "";

    }
}

//function-remove
function remove_task(task){
    task.parentNode.remove(true);
};

function completetask(task){
    var done = task.parentNode;
    done.classList.toggle("done");
}


//evento-tarefa

btnClick.addEventListener("click", function(e){
    
    e.preventDefault();
    addtask();
})
