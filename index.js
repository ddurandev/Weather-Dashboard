// GIVEN a weather dashboard with form inputs
// WHEN I search for a city
// THEN I am presented with current and future conditions for that city and that city is added to the search history
// WHEN I view current weather conditions for that city
// THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, and the wind speed
// WHEN I view future weather conditions for that city
// THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity
// WHEN I click on a city in the search history
// THEN I am again presented with current and future conditions for that city

var searchCity = $("#searchInput");
var searchBtn = $("#searchBtn");
var apiKey = "bcc2e59478feccd363efd648f25a1f88";

searchBtn.on("click", function(){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchCity.val()}&appid=${apiKey}&units=imperial`)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        $("#temp").text(data.main.temp)
    })

    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${searchCity.val()}&appid=${apiKey}&units=imperial`)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        $("#temp1").text(data.list[5].main.temp)
    })
});