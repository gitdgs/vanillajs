const API_KEY = "54fdcb8f713b0df2e10487ad4eb584f0";

/**
 * 1. https://openweathermap.org/ 계정생성
 * 2. API_KEY 확인
 */

/**
 * 
 * @param {*} position 
 */
function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(url)
        .then(response => response.json())
        .then((data) => {
            console.log(data);
            const weather = document.querySelector("#weather span:first-child");
            const wind = document.querySelector("#weather span:nth-child(2)");
            const city = document.querySelector("#weather span:last-child");

            city.innerText = `${data.name}`;
            wind.innerText = `💨${data.wind.speed} `;
            weather.innerText = `${data.weather[0].main} / 🌡️${data.main.temp}°`;

            console.log(wind);

        });
    //wetube
    console.log(url);
}
//openweather.org
//Api key: 54fdcb8f713b0df2e10487ad4eb584f0
//https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
//https://api.openweathermap.org/data/2.5/weather?lat=37.3907&lon=126.9167&appid=54fdcb8f713b0df2e10487ad4eb584f0
function onGeoError() {
    alert("Can't find you.")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
onGeoOk