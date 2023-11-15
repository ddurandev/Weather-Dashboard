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
            console.log(data)
            var currentDate = new Date(data.list[0].dt * 1000)
            var formatSet = { year: 'numeric', month: 'long', day: 'numeric' };
            var formattedDate = currentDate.toLocaleDateString('en-US', formatSet);
            $("#currentCity-date").text(formattedDate);
            $("#temp").html(`${data.list[0].main.temp}&deg;F`);
            $("#wind").html(`${data.list[0].wind.speed} mph`);
            $("#humidity").html(`${data.list[0].main.humidity}%`);
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