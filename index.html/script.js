// for adding task to list container

let task=document.getElementById("task");
let tasklist=document.getElementById("task-list");

function addtask(){ if(task.value === ''){
    alert("Please Write Your Task")
}
else{
    let li = document.createElement("li");
li.innerHTML = task.value;
tasklist.appendChild(li);
let cross=document.createElement("span");
cross.innerHTML="\u00d7";
li.appendChild(cross);
}
task.value='';
savedata();
}


// for removing and checking task in li

tasklist.addEventListener("click",(e)=>{
if(e.target.tagName==="LI"){
    e.target.classList.toggle("checked");
    savedata();
}
else if(e.target.tagName==="SPAN"){
    e.target.parentElement.remove();
    savedata();
}
});


// for saving user task on browser

function savedata(){
    localStorage.setItem("data",tasklist.innerHTML);
}
function showtask(){
    tasklist.innerHTML = localStorage.getItem("data");
}
showtask();
