const loginForm = document.querySelector("#loginForm");
const loginInput = document.querySelector("#loginForm input");
const greeting = document.querySelector("#greeting");
const logOut = document.querySelector("#logout");
const h1 = document.querySelector("h1");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(e) {
    e.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const wroteUsername = loginInput.value;
    localStorage.setItem(USERNAME_KEY, wroteUsername);
    paintingGreeting(wroteUsername);
}

function paintingGreeting(username) {
    greeting.classList.remove(HIDDEN_CLASSNAME);
    h1.classList.remove(HIDDEN_CLASSNAME);
    greeting.innerText = `${username}`;
    logOut.classList.remove(HIDDEN_CLASSNAME);
    logOut.addEventListener("click", removeUserName);
}

function removeUserName() {
    window.localStorage.removeItem(USERNAME_KEY);
    //그냥 함수만 추가했을 때 새로고침 해야 logout이 뜨는 현상이 생겨서 reload로 해결,,
    location.reload();
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null || savedUsername === undefined) {
    //show form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    //show greetings
    paintingGreeting(savedUsername);
}
