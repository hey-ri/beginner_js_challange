const form = document.querySelector("#form");
const inputNum = document.querySelector("input");
const guessInput = document.querySelector(".guess input");
const p = document.querySelector("p");
const strong = document.querySelector("strong");

const HIDDEN = "hidden";

function onSubmit(e) {
    e.preventDefault();
    let random = Math.floor(Math.random() * inputNum.value) + 1;
    //console.log(random);
    let guessNum = guessInput.value;
    const num = parseInt(guessNum, 10);

    p.innerText = `You chose ${guessNum} , the machine chose ${random}`;

    if (num === random) {
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
