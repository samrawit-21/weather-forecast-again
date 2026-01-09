function refreshWeather(response) {
    let temperatureElement = document.querySelector("#weather-Num");
    let temperature = response.data.temperature.current;
    temperatureElement.innerHTML= Math.round(temperature);
    let headingElement = document.querySelector("#weather-city");
    let descriptionElement = document.querySelector("#description");
      let humidityElement = document.querySelector("#humidity");
      let windspeedElement = document.querySelector("#windspeed");
      let timeElement = document.querySelector("#current-date");
      let date = new Date(response.data.time * 1000);
      
console.log(response.data);
    headingElement.innerHTML = response.data.city;
    timeElement.innerHTML = formatDate(date);
    descriptionElement.innerHTML = response.data.condition.description;
    humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
    windspeedElement.innerHTML = `${response.data.wind.speed}Km/h`;
    timeElement.innerHTML
     console.log(response.data.condition.description);
}
function formatDate(date) {
    let minute = date.getMinutes();
    let hour = date.getHours();
    let getMinutes = date.getMinutes();
    let days= ["Sun","Mon","Tue","Wed","Thurs","Fri","Sat"];
    let day = days[date.getDay()];
    if(minute < 10) {
        minute = `0${minute}`;
    }
    if(hour < 10) {
        hour = `0${hour}`;
    }
    return `${day} ${hour}:${minute}`;
}
function searchCity(city) {
    let apiKey = "o0334a459at0ffc9a191a1b183f3f306";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(refreshWeather);
}


function followLink(event) {
    event.preventDefault();
    let inputElement = document.querySelector("#search-input");
    
    searchCity(inputElement.value);
}
let searchFormElement= document.querySelector("#search-form");
searchFormElement.addEventListener("submit",followLink);
searchCity("Mekele");