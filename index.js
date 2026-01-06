function searchCity(city) {
let apiKey = "o0334a459at0ffc9a191a1b183f3f306";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
console.log(apiUrl);
}

function followLink(event) {
    event.preventDefault();
    let inputElement = document.querySelector("#search-input");
    let headingElement = document.querySelector("#weather-city");
    headingElement.innerHTML = inputElement.value;
}
let searchFormElement= document.querySelector("#search-form");
searchFormElement.addEventListener("submit",followLink);