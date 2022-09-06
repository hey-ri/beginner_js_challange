const form = document.querySelector("#form");
const inputNum = document.querySelector("input");
const guessInput = document.querySelector(".guess input");
const p = document.querySelector("p");
const strong = document.querySelector("strong");

const HIDDEN = "hidden";

function onSubmit(e) {
    e.preventDefault();
    let random = Math.floor(Math.random() * inputNum.value);
    console.log(random);

    p.innerText = `You chose ${guessInput.value} , the machine chose ${random}`;

    if (parseInt(guessInput.value) === random) {
        p.classList.remove(HIDDEN);
        strong.innerText = "You Win";
        strong.classList.remove(HIDDEN);
    } else {
        p.classList.remove(HIDDEN);
        strong.innerText = "You lose";
        strong.classList.remove(HIDDEN);
    }
}

form.addEventListener("submit", onSubmit);
