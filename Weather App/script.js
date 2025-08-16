const cityWeatherData = document.getElementById('cityWeatherData');
const currentLocationWeatherData = document.getElementById('currentLocationWeatherData');
const weatherData = document.getElementById('weatherData');

async function getWeatherDataByCityName(cityName){
    const promise = await fetch(`http://api.weatherapi.com/v1/current.json?key=9ae5808a62aa418eb1920809251608&q=${cityName}&aqi=yes`)
    return promise.json();
}

async function getWeatherDataByCurrentLocation(lat,long){
    const promise = await fetch(`http://api.weatherapi.com/v1/current.json?key=9ae5808a62aa418eb1920809251608&q=${lat},${long}&aqi=yes`)
    return promise.json();
}

function displayWeatherData(data) {
    weatherData.innerHTML = '';
    const h3 = document.createElement('h3');
    const p = document.createElement('p');
    h3.innerText = `City: ${data.location.name}`;
    p.innerText = `Temperature: ${data.current.temp_c}°C, Condition: ${data.current.condition.text}, Humidity: ${data.current.humidity}%`;
    weatherData.appendChild(h3);
    weatherData.appendChild(p);
}

cityWeatherData.addEventListener('click', async () => {
    const cityName = document.getElementById('cityName').value;
    if(cityName != ''){
        const data = await getWeatherDataByCityName(cityName);
        displayWeatherData(data);
    } else {
        alert('Please enter a city name');
    }
})

async function gotLocation(position) {
    const lat = position.coords.latitude;
    const long = position.coords.longitude;
    const data = await getWeatherDataByCurrentLocation(lat, long);
    displayWeatherData(data);
}

function failedToGet() {
    alert('Failed to get your location');   
}

currentLocationWeatherData.addEventListener('click', async () => {
    navigator.geolocation.getCurrentPosition(gotLocation, failedToGet)
})