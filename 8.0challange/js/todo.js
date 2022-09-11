const todoForm = document.getElementById("todoForm");
const todoInput = todoForm.querySelector("input");
const todoList = document.getElementById("todoList");

const TODOS_key = "todos";

//새로운 배열 추가
let toDos = [];

function saveTodos() {
    //toDos를 localStorage에 넣는 함수
    localStorage.setItem(TODOS_key, JSON.stringify(toDos));
}

function deleteTodo(e) {
    const li = e.target.parentElement;
    toDos = toDos.filter((item) => item.id !== parseInt(li.id));
    li.remove();
    saveTodos();
}

function paintTodo(newTodo) {
    //화면에 구현되는 함수
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text; //.text 안해주면 object Object로 뜸 저 안에 newTodoObj를 통해 (그 안에 text가 있음) text를 쓴다는 뜻으로 .text해주기

    const button = document.createElement("button");
    button.innerText = "X";
    button.addEventListener("click", deleteTodo);
    li.appendChild(span);
    li.appendChild(button);
    todoList.appendChild(li);
}

function handleTodoSubmit(e) {
    //write하는 함수
    e.preventDefault();
    const newTodoInput = todoInput.value;
    todoInput.value = "";
    const newTodoObj = {
        text: newTodoInput,
        id: Date.now(),
    };
    toDos.push(newTodoObj);
    paintTodo(newTodoObj);
    saveTodos();
}
todoForm.addEventListener("submit", handleTodoSubmit);

//저장된 localStorage에 있는 것 가져오는 변수
const savedtodos = localStorage.getItem(TODOS_key);

if (savedtodos !== null) {
    const parsedToDos = JSON.parse(savedtodos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintTodo);
}
