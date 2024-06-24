const select = document.querySelector(".location-button");
const loc = document.querySelector(".location");
const pressure = document.querySelector(".PRESSURE");
const humidity = document.querySelector(".humidity-view");
const wind = document.querySelector(".wind-view");
const temp = document.querySelector(".weather-temp");
const weades = document.querySelector(".weather-desc");

const changeWhe = function (lat, long) {
    const wether = new XMLHttpRequest();
    wether.open(
        "GET",
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=04c2da5ffc8ec18ecedd45d8daba00b7&units=metric`
    );
    wether.send();

    wether.onload = () => {
        console.log(wether.responseText);
        const data = JSON.parse(wether.responseText);
        loc.textContent = `${select.value}, ${data.sys.country}`;
        console.log(data.main.pressure);
        console.log(data.main.humidity);
        console.log(data.wind.speed);
        console.log(data);
        humidity.textContent = `${data.main.humidity} %`;
        pressure.textContent = `${data.main.pressure} Pa`;
        wind.textContent = `${data.wind.speed} km/h`;
        temp.textContent = `${Math.round(data.main.temp)}°C`;
        weades.textContent = data.weather[0].description;
    };
};

select.addEventListener("change", () => {
    const lat = [31.943584, 48.828057, 51.477904];
    const long = [35.90591, 2.34519, -0.112312];

    if (select.value == "Amman") {
        lat1 = lat[0];
        long1 = long[0];
    } else if (select.value == "Paris") {
        lat1 = lat[1];
        long1 = long[1];
    } else if (select.value == "London") {
        lat1 = lat[2];
        long1 = long[2];
    }

    changeWhe(lat1, long1);
});

document.body.onload = () => {
    changeWhe(48.828057, 2.34519);
};
