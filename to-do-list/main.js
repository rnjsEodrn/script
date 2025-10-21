let taskInput = document.getElementById('tesk-input');
let addListButton = document.getElementById('add-list-button');
let taskItems = [];
let tabs = document.querySelectorAll(".tab");
let currentMode = "all";

//event
addListButton.addEventListener('click', addTask);

taskInput.addEventListener('keydown', function(event){
  if(event.key === 'Enter'){
    addTask();
  }
})

for(let tab of tabs){
  tab.addEventListener("click", function(event){changeMode(event)});
}


//click function
function addTask() {

  if(taskInput.value === ""){
    alert("할일을 입력해주세요.");
    return;
  }

  let task = {
    id: crypto.randomUUID(),
    taskContent: taskInput.value,
    isComplete: false,
  };
  taskInput.value = "";
  taskItems.push(task);
  rendering();
}

function changeMode(event){
  currentMode = event.target.id;
  rendering();
}

function toggleComplete(id) {
  for (let task of taskItems) {
    if (task.id == id) {
      task.isComplete = !task.isComplete;
      break;
    }
  }
  rendering();
}

function deleteTask(id){
  taskItems = taskItems.filter((task) => task.id !== id);
  rendering();
}


//render
function rendering(){
  if(currentMode === "all"){
    render(taskItems);
  } else if(currentMode === "ongoing"){
    render(taskItems.filter((task) => !task.isComplete));
  } else if(currentMode === "done"){
    render(taskItems.filter((task) => task.isComplete));
  }
}

function render(taskList) {
  let resultHTML = '';
  for (let task of taskList) {
    if (task.isComplete) {
      resultHTML += `<div class="list-line p-2">
            <div class="text-area task-done">${task.taskContent}</div>
            <div class="button-area">
              <div class="check-area">
                <button class="btn return-button" onclick="toggleComplete('${task.id}')"><i class="fa-solid fa-rotate-right"></i></button>
              </div>
              <div class="delete-area">
                <button class="btn delete-button" onclick=deleteTask('${task.id}')><i class="fa-solid fa-trash"></i></button>
              </div>
            </div>
          </div>`;
    } else {
      resultHTML += `<div class="list-line p-2">
            <div class="text-area">${task.taskContent}</div>
            <div class="button-area">
              <div class="check-area">
                <button class="btn check-button" onclick="toggleComplete('${task.id}')"><i class="fa-solid fa-check"></i></button>
              </div>
              <div class="delete-area">
                <button class="btn delete-button" onclick=deleteTask('${task.id}')><i class="fa-solid fa-trash"></i></button>
              </div>
            </div>
          </div>`;
    }
  }
  document.getElementById('list-area').innerHTML = resultHTML;
}
