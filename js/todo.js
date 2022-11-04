const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");
const TODOS_KEY = "todos";
let toDos = [];

//To Do 저장
function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
    //localStorage.setItem("todos_2", toDos);
}
//To Do 삭제
function deleteToDo(event) {
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => {
        return toDo.id !== parseInt(li.id)
    });
    saveToDos();
}

//To Do 화면 표시
function paintToDo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

//
function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    }
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit)

function sayHello(item) {
    console.log("hello", item);
}
const savedToDos = localStorage.getItem(TODOS_KEY);

//저장된 기존 to do 있는경우 표시
if (savedToDos) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}
