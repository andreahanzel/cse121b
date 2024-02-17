document.addEventListener('DOMContentLoaded', () => {
    const searchButton = document.getElementById('search-btn');
    const searchInput = document.getElementById('search-input');

    // Event listener for the search button click event
    searchButton.addEventListener('click', function() {
        const cityName = searchInput.value.trim();
        if (cityName) {
            fetchWeatherData(cityName);
        }
    });
});

function fetchWeatherData(city) {
    const apiKey = '31a707bfad0fae088c840fe55ac230c6'; 
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Weather data not found.');
            }
            return response.json();
        })
        .then(data => updateWeatherDisplay(data))
        .catch(error => {
            console.error('Error fetching weather data:', error);
            alert('Failed to retrieve weather data. Please try again.');
        });
}

function updateWeatherDisplay(data) {
    const weatherDisplay = document.getElementById('weather-display');
    const weatherHtml = `
        <h2>Weather in ${data.name}</h2>
        <p>Temperature: ${data.main.temp}°C</p>
        <p>Humidity: ${data.main.humidity}%</p>
        <p>Wind Speed: ${data.wind.speed} m/s</p>
        <p>Description: ${data.weather[0].main}</p>
        <img src="http://openweathermap.org/img/w/${data.weather[0].icon}.png" alt="Weather icon">
    `;
    weatherDisplay.innerHTML = weatherHtml;
}
