const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const loginButton = loginForm.querySelector("button");
const Link = document.querySelector("a");

const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

//Login Submit 이벤트
function onLoginSubmit(event) {
    event.preventDefault();
    const username = loginInput.value;
    loginForm.classList.add(HIDDEN_CLASSNAME);
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}

//메세지 표시
function paintGreetings(username) {
    greeting.classList.remove(HIDDEN_CLASSNAME);
    greeting.innerText = `Hello ${username}`;
}

function handleLinkClick(event) {
    event.preventDefault();
    console.log(event);
    alert("clicked");

}

const savedUsername = localStorage.getItem(USERNAME_KEY);

//EventListener 등록
if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreetings(savedUsername);
}

//Link.addEventListener("click", handleLinkClick);
//loginButton.addEventListener("click", onLoginBtnClick);