const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");
const TODOS_KEY = "todos";
let toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
    //localStorage.setItem("todos_2", toDos);
}
//li 삭제
function deleteToDo(event) {
    const li = event.target.parentElement;
    li.remove();
    //console.log(li.id);    
    toDos = toDos.filter((toDo) => {
        return toDo.id !== parseInt(li.id)
    });
    saveToDos();
}

function paintToDo(newTodo) {
    //console.log("i Will paint" + newTodo)
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

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    }
    //console.dir(toDos);
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit)
function sayHello(item) {
    console.log("hello", item);
}
const savedToDos = localStorage.getItem(TODOS_KEY);
//console.log(savedToDos);
if (savedToDos) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    //console.log(parsedToDos);
    parsedToDos.forEach(paintToDo);
    //parsedToDos.forEach((item) => console.log(item));
}
