function refreshWeather(response) {
     console.log(response);
}
function searchCity(city) {
    let apiKey = "o0334a459at0ffc9a191a1b183f3f306";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiUrl}`;
    axios.get(apiUrl).then(refreshWeather);
}


function followLink(event) {
    event.preventDefault();
    let inputElement = document.querySelector("#search-input");
    let headingElement = document.querySelector("#weather-city");
    headingElement.innerHTML = inputElement.value;
    searchCity(inputElement.value);
}
let searchFormElement= document.querySelector("#search-form");
searchFormElement.addEventListener("submit",followLink);