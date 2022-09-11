const clock = document.querySelector("#clock");

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}`;
}

//한번 실행 시켜줌으로 시작하자 마자 기다리지 않게
getClock();

setInterval(getClock, 1000);
