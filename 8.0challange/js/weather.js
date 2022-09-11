const API_KEY = "내 API 주소";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url) //fetch는 promise기다리는 함수라 then을 이용해서 바로 나타내주기
        .then((response) => response.json())
        .then((data) => {
            const weather = document.querySelector("#weather span:first-child");
            const city = document.querySelector("#weather span:last-child");
            const temp = data.main.temp;
            city.innerText = data.name;
            weather.innerText = `${Math.round(temp)} °C / ${data.weather[0].main}`;
        });
}
function onGeoError() {
    alert("Can't find you. No weather for you.");
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
