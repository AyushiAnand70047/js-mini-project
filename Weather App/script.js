const apiKey = "b3109a80a26a89cbaeb6c991bb5f1d5a";
// let apiCity = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;
// let apiLocation = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;

let weatherIcon = document.querySelector('.weather-icon');
let city = document.querySelector('.city');
let temperature = document.querySelector('.temperature');
let humidity = document.querySelector('.humidity');
let wind = document.querySelector('.wind');
const locationButton = document.getElementById("location-button");
const searchButton = document.getElementById("search-button");

async function cityWeather(cityName){
    let data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`);
    let weatherData = await data.json();
    return weatherData;
}

async function locationWeather(lat,lon){
    let data = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`);
    let weatherData = await data.json();
    return weatherData;
}

function displayWeatherData(weatherData){
    let icon = weatherData.weather[0].main.toLowerCase();
    weatherIcon.src = `images/${icon}.png`;
    city.innerText = weatherData.name;
    let temp_c = Math.round(weatherData.main.temp - 273.15);
    temperature.innerText = temp_c + "°C";
    humidity.innerText = weatherData.main.humidity + "%";
    wind.innerText = weatherData.wind.speed + "Km/h";
}

async function gotLocation(position){
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    let weatherData = await locationWeather(lat,lon);
    displayWeatherData(weatherData);
}

async function failedToGet(){
    console.log("Unable to get location")
}

locationButton.addEventListener('click', async () => {
    navigator.geolocation.getCurrentPosition(gotLocation, failedToGet);
})

searchButton.addEventListener('click',async () => {
    let cityName = document.getElementById("city-name");
    let weatherData = await cityWeather(cityName.value);
    cityName.value = "";
    displayWeatherData(weatherData);
})