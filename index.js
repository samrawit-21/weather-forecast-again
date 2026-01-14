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
      let iconImage = document.querySelector("#icon");
      
console.log(response.data);
iconImage.innerHTML =  `<img src="${response.data.condition.icon_url}" class="weather-icon">`
    headingElement.innerHTML = response.data.city;
    timeElement.innerHTML = formatDate(date);
    descriptionElement.innerHTML = ` ${response.data.condition.description}`;
    humidityElement.innerHTML = ` ${response.data.temperature.humidity}%`;
    windspeedElement.innerHTML = `${response.data.wind.speed}Km/h`;
    timeElement.innerHTML
     getForecast(response.data.city);
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
 function formatDay(timestamp) {
    let date = new Date(timestamp * 1000);
    let days = ["Sun","Mon","Tue","Wed","Thur","Fri","Sat"];
    return days[date.getDay()];
 }

function getForecast(city) {
    let apiKey = "o0334a459at0ffc9a191a1b183f3f306";
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;
   axios.get(apiUrl).then(displayForecast);
}
function displayForecast(response) {
   console.log(response);
 
  

   let forecastHtml = "";

   response.data.daily.forEach(function(day, index) {
    if(index < 5 ) {
   forecastHtml = forecastHtml +
  `<div class="weather-forecast-day"> 
    <div class="weather-forecast-date">${formatDay(day.time)}</div> 
     <img src="${day.condition.icon_url}"  class="weather-forecast-icon" />
    <div class="weather-forecast-temp">
         <div class="weather-forecast-temper"><strong>${Math.round(day.temperature.maximum)}°</strong></div>
         <div class="weather-forecast-temper">${Math.round(day.temperature.minimum)}°</div></div> 
     </div>
`;
}
});
 let forecast = document.querySelector("#forecast");
forecast.innerHTML = forecastHtml;
}

let searchFormElement= document.querySelector("#search-form");
searchFormElement.addEventListener("submit",followLink);
searchCity("Mekele");
