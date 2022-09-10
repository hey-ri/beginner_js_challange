const todoForm = document.getElementById("todoForm");
const todoInput = todoForm.querySelector("input");
const todoList = document.getElementById("todoList");

const TODOS_key = "todos";

//새로운 배열 추가
let toDos =
    []; /* const로 된걸 let으로 바꿔주고 58번째줄 if 절에 toDos = parsedToDos;를 추가해 줌으로 전에 있는 배열들을 저장하게 됨. 그래서 한번 액션을 취하고 또 다시 input에 작성을 할 때 덮어 쓰우는 것이 아니라 그 배열에 추가로 작성됨*/

function saveTodos() {
    //toDos를 localStorage에 넣는 함수
    localStorage.setItem(TODOS_key, JSON.stringify(toDos));
    //단순히 문자로 보이고 싶지 않고 배열 형태의 스트링으로 보이고 싶기 때문에 setItem에 json.stringify를 추가 해 주었다. 스트링 타입으로 하면 같은 문자가 반복 됐을 때 초기화 되기 때문에.
}

function deleteTodo(e) {
    //지우는 함수
    //console.log(e.target.parentElement.innerText);
    //parentElement는 어느 요소를 통해(click된 element의 부모다) 클릭 되었는지 알게 해줌

    const li = e.target.parentElement;

    //console.log(li.id);
    toDos = toDos.filter((del) => del.id !== parseInt(li.id)); //del은 toDos DB에 있는 요소중 하나 parseInt하는 이유 li의 id html li의 id가 string타입이라서 숫자로 바꿔주기 위해 함
    li.remove();
    saveTodos(); //지워진 것 빼고 새로 저장
}

function paintTodo(newTodo) {
    //화면에 구현되는 함수
    //console.log("i will paint", newTodo);
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;

    const button = document.createElement("button");
    button.innerText = "x";
    button.addEventListener("click", deleteTodo);
    li.appendChild(span);
    li.appendChild(button);
    //console.log(li);
    todoList.appendChild(li);
}

function handleTodoSubmit(e) {
    //write하는 함수
    e.preventDefault();
    //console.log(todoInput.value);
    const newTodoInput = todoInput.value;
    todoInput.value = "";
    /* newTodoInput에 todoInput.value를 담고 있지만 그 이후에는 비워주고 있다 "" 로 근데 그렇다고 해서 newTodoInput가 비워지는 것은 아니다 왜냐하면 todoInput.value에 값을 복사하고 있기 때문에 (담고있기 때문에) newTodoInput가이 지워지는 것이 아니다.*/
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
//console.log(savedtodos);

if (savedtodos !== null) {
    const parsedToDos = JSON.parse(savedtodos);
    /* parse를 사용하면 배열형태의 스트링이 배열이 됨 즉 배열로 무엇인가를 반환시킴(무언가 행동을 취하게 하고 싶어서 행동을 취하려면 js가 알아들을만하게 해야하는데 그래서 배열로 바꿔준것임) */
    toDos = parsedToDos;
    //console.log(parsedToDos);
    //parsedToDos.forEach((item) => console.log("this is the turn of ", item));
    /* 여기서 item은 js에서 submit이 event의 정보를 그냥 주듯 array의 각 item 또한 그냥 주는 것이다.(첫번째 인자로) */
    parsedToDos.forEach(paintTodo);
}
