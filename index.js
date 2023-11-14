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


searchBtn.on("click", function () {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchCity.val()}&appid=${apiKey}&units=imperial`)
        .then(res => res.json())
        .then(data => {
            $("#currentCity").text(data.name)
            var currentDate = new Date(data.dt * 1000)
            var formatSet = { year: 'numeric', month: 'long', day: 'numeric' };
            var formattedDate = currentDate.toLocaleDateString('en-US', formatSet);
            $("#currentCity-date").text(formattedDate);
            $("#temp").html(`${data.main.temp}&deg;F`);
            $("#wind").html(`${data.wind.speed} mph`);
            $("#humidity").html(`${data.main.humidity}%`);
            $("#date1").text(formattedDate);
            $("#temp1").html(`${data.main.temp}&deg;F`);
            $("#wind1").html(`${data.wind.speed} mph`);
            $("#humidity1").html(`${data.main.humidity}%`);
            $("#date2").text(formattedDate);
            $("#temp2").html(`${data.main.temp}&deg;F`);
            $("#wind2").html(`${data.wind.speed} mph`);
            $("#humidity2").html(`${data.main.humidity}%`);
            $("#date3").text(formattedDate);
            $("#temp3").html(`${data.main.temp}&deg;F`);
            $("#wind3").html(`${data.wind.speed} mph`);
            $("#humidity3").html(`${data.main.humidity}%`);
            $("#date4").text(formattedDate);
            $("#temp4").html(`${data.main.temp}&deg;F`);
            $("#wind4").html(`${data.wind.speed} mph`);
            $("#humidity4").html(`${data.main.humidity}%`);
            $("#date5").text(formattedDate);
            $("#temp5").html(`${data.main.temp}&deg;F`);
            $("#wind5").html(`${data.wind.speed} mph`);
            $("#humidity5").html(`${data.main.humidity}%`);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        })
});







