const loginForm = document.querySelector("#loginForm");
const loginInput = document.querySelector("#loginForm input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden"; //일반적으로 대문자로 표기할 때는 스트링 정보만 저장하고 싶을 때 쓴다.
const USERNAME_KEY = "username";

function onLoginSubmit(e) {
    e.preventDefault(); /* submit기능은 저절로 보내는 기능이 생겨서 막아주기 */
    //console.log(loginInput.value);
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const wroteUsername = loginInput.value;
    /* localStorage는 미니DB같은 존재다. 개발자도구 애플리케이션의 로컬스토리지에 들어가면 볼 수 있는데 key,value값이 필요로 된다. */
    localStorage.setItem(USERNAME_KEY, wroteUsername);
    //console.log(userName);
    paintingGreeting();
}

function paintingGreeting(username) {
    greeting.classList.remove(HIDDEN_CLASSNAME);
    greeting.innerText = `Hello ${username}`;
    /* 인자 usename은 상황에 따라 바뀔 수 있음 그래서 hello + username으로 해줌 밑에 식에서는 save어쩌고로 쓰이고 위에서는 username으로 쓰임 
    !localStorage에 유저이름이 저장 돼 있어서 굳이 인자를 줄 필요는 없음! */
}

const savedUsername = localStorage.getItem(USERNAME_KEY);
//console.log(savedUsername);

if (savedUsername === null) {
    //show form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    //show greetings
    paintingGreeting();
}
