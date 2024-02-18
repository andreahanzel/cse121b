// Initializes an array to store the names of recently searched cities.
let recentSearches = [];

// This function runs as soon as the HTML document's DOM is fully loaded.
document.addEventListener('DOMContentLoaded', () => {
    // Retrieves the search button and input elements from the document.
    const searchButton = document.getElementById('search-btn');
    const searchInput = document.getElementById('search-input');

    // Adds an event listener for the 'click' event on the search button.
    searchButton.addEventListener('click', function() {
        // Trims whitespace from the search input value and stores it in cityName.
        const cityName = searchInput.value.trim();
        // If cityName is not an empty string, it fetches weather data and updates recent searches.
        if (cityName) {
            fetchWeatherData(cityName);
            updateRecentSearches(cityName);
        }
    });

    // Displays any stored searches on the page load.
    displayRecentSearches();
});

// Fetches weather data from the OpenWeatherMap API for a given city.
function fetchWeatherData(city) {
    // The API key and URL for the API request.
    const apiKey = '31a707bfad0fae088c840fe55ac230c6';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    // Makes a fetch request to the URL and handles the response.
    fetch(url)
        .then(response => {
            // If the response is not ok, throws an error.
            if (!response.ok) {
                throw new Error(`${response.status}: ${response.statusText}`);
            }
            return response.json();
        })
        .then(data => {
            // Checks if the API returned data successfully, otherwise throws an error.
            if (data.cod !== 200) {
                throw new Error('City not found');
            }
            // Updates the weather display with the fetched data.
            updateWeatherDisplay(data);
        })
        .catch(error => {
            // Displays an error message if an error occurs during the fetch process.
            displayError(error.message);
        });
}

// Updates the weather display with data fetched from the API.
function updateWeatherDisplay(data) {
    const weatherDisplay = document.getElementById('weather-display');
    // Constructs the HTML to display weather information.
    const weatherHtml = `
        <h2>Weather in ${data.name}</h2>
        <p>Temperature: ${data.main.temp}°C</p>
        <p>Humidity: ${data.main.humidity}%</p>
        <p>Wind Speed: ${data.wind.speed} m/s</p>
        <p>Description: ${data.weather[0].description}</p>
        <img src="http://openweathermap.org/img/w/${data.weather[0].icon}.png" alt="Weather icon">
    `;
    // Sets the inner HTML of the weather display element to the constructed HTML.
    weatherDisplay.innerHTML = weatherHtml;
}

// Updates the list of recent searches.
function updateRecentSearches(cityName) {
    // Adds the cityName to the start of the recentSearches array if it's not already included.
    if (!recentSearches.includes(cityName)) {
        recentSearches.unshift(cityName);
        // Keeps only the last 5 entries in the array.
        recentSearches = recentSearches.slice(0, 5);
    }

    // Updates the display of recent searches on the webpage.
    displayRecentSearches();
}

// Displays the recent searches as buttons for quick access.
function displayRecentSearches() {
    const recentSearchesDiv = document.getElementById('recent-searches');
    // Maps each city name in recentSearches to a button element and joins them into a single string.
    const searchesHtml = recentSearches.map(city => `<button class="recent-search">${city}</button>`).join('');
    // Sets the inner HTML of the recent searches div to the constructed buttons.
    recentSearchesDiv.innerHTML = searchesHtml;

    // Adds click event listeners to each recent search button to fetch weather data for that city.
    document.querySelectorAll('.recent-search').forEach(button => {
        button.addEventListener('click', function() {
            fetchWeatherData(this.textContent);
        });
    });
}

// Displays an error message within the weather display area.
function displayError(message) {
    const weatherDisplay = document.getElementById('weather-display');
    // Sets the inner HTML of the weather display to show the error message.
    weatherDisplay.innerHTML = `<p class="error-message">${message}</p>`;
}
