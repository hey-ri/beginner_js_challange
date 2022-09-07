const chrsms = document.querySelector("p.how");

function howChsms() {
    const date = new Date();

    const chrsmsDay = new Date("2022-12-25");
    const gap = chrsmsDay.getTime() - date.getTime();

    //밀리세컨드 초를 24시간 60분 60초로 나누어 계산하기
    const day = Math.floor(gap / (1000 * 60 * 60 * 24));
    const hours = String(Math.floor((gap / (1000 * 60 * 60)) % 24)).padStart(2, "0");
    const minutes = String(Math.floor((gap / (1000 * 60)) % 60)).padStart(2, "0");
    const secondes = String(Math.floor((gap / 1000) * 60)).padStart(2, "0");
    chrsms.innerText = `${day}d ${hours}h ${minutes}m ${secondes}s`;
}

howChsms();
setInterval(howChsms, 1000);
