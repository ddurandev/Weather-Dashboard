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
var searchHistory = [];


searchBtn.on("click", function () {
    var city = searchCity.val();

    if (city && !searchHistory.includes(city)) {
        searchHistory.push(city);
        updateSearchHistory();
    }

    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${searchCity.val()}&appid=${apiKey}&units=imperial`)
        .then(res => res.json())
        .then(data => {
            $("#currentCity").text(data.city.name)
            var currentDate = new Date(data.list[0].dt * 1000)
            var formatSet = { year: 'numeric', month: 'long', day: 'numeric' };
            var formattedDate = currentDate.toLocaleDateString('en-US', formatSet);
            $("#currentCity-date").text(formattedDate);
            $("#temp").html(`${data.list[0].main.temp}&deg;F`);
            $("#wind").html(`${data.list[0].wind.speed} mph`);
            $("#humidity").html(`${data.list[0].main.humidity}%`);
        })

        fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${searchCity.val()}&appid=${apiKey}&units=imperial`)
        .then(res => res.json())
        .then(data => {
            $("#currentCity").text(data.city.name)
            var currentDate = new Date(data.list[8].dt * 1000)
            var formatSet = { year: 'numeric', month: 'long', day: 'numeric' };
            var formattedDate = currentDate.toLocaleDateString('en-US', formatSet);
            $("#date1").text(formattedDate);
            $("#temp1").html(`${data.list[8].main.temp}&deg;F`);
            $("#wind1").html(`${data.list[8].wind.speed} mph`);
            $("#humidity1").html(`${data.list[8].main.humidity}%`);
            $("#date1").text(formattedDate);
        })

        fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${searchCity.val()}&appid=${apiKey}&units=imperial`)
        .then(res => res.json())
        .then(data => {
            $("#currentCity").text(data.city.name)
            var currentDate = new Date(data.list[16].dt * 1000)
            var formatSet = { year: 'numeric', month: 'long', day: 'numeric' };
            var formattedDate = currentDate.toLocaleDateString('en-US', formatSet);
            $("#date2").text(formattedDate);
            $("#temp2").html(`${data.list[16].main.temp}&deg;F`);
            $("#wind2").html(`${data.list[16].wind.speed} mph`);
            $("#humidity2").html(`${data.list[16].main.humidity}%`);
            $("#date2").text(formattedDate);
        })

        fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${searchCity.val()}&appid=${apiKey}&units=imperial`)
        .then(res => res.json())
        .then(data => {
            $("#currentCity").text(data.city.name)
            var currentDate = new Date(data.list[24].dt * 1000)
            var formatSet = { year: 'numeric', month: 'long', day: 'numeric' };
            var formattedDate = currentDate.toLocaleDateString('en-US', formatSet);
            $("#date3").text(formattedDate);
            $("#temp3").html(`${data.list[24].main.temp}&deg;F`);
            $("#wind3").html(`${data.list[24].wind.speed} mph`);
            $("#humidity3").html(`${data.list[24].main.humidity}%`);
            $("#date3").text(formattedDate);
        })

        fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${searchCity.val()}&appid=${apiKey}&units=imperial`)
        .then(res => res.json())
        .then(data => {
            $("#currentCity").text(data.city.name)
            var currentDate = new Date(data.list[32].dt * 1000)
            var formatSet = { year: 'numeric', month: 'long', day: 'numeric' };
            var formattedDate = currentDate.toLocaleDateString('en-US', formatSet);
            $("#date4").text(formattedDate);
            $("#temp4").html(`${data.list[32].main.temp}&deg;F`);
            $("#wind4").html(`${data.list[32].wind.speed} mph`);
            $("#humidity4").html(`${data.list[32].main.humidity}%`);
            $("#date4").text(formattedDate);
        })

        fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${searchCity.val()}&appid=${apiKey}&units=imperial`)
        .then(res => res.json())
        .then(data => {
            $("#currentCity").text(data.city.name)
            var currentDate = new Date(data.list[39].dt * 1000)
            var formatSet = { year: 'numeric', month: 'long', day: 'numeric' };
            var formattedDate = currentDate.toLocaleDateString('en-US', formatSet);
            $("#date5").text(formattedDate);
            $("#temp5").html(`${data.list[39].main.temp}&deg;F`);
            $("#wind5").html(`${data.list[39].wind.speed} mph`);
            $("#humidity5").html(`${data.list[39].main.humidity}%`);
            $("#date5").text(formattedDate);
        })
});

function updateSearchHistory() {
    var searchHistoryContainer = $("#searchHistory");
    searchHistoryContainer.empty();

    searchHistory.forEach(function (city) {
        var button = $("<button>").text(city).addClass("historyButton");
        button.on("click", function () {
            searchCity.val(city);
            searchBtn.click();
        });
        searchHistoryContainer.append(button);
    });
}