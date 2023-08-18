const apiKey = 'YOUR_API_KEY';
const cityName = 'New York'; // Replace with the desired city name

const apiUrl = `https://openweathermap.org/weather?city=${lagos}&apiKey=${ed51b93f114eb89ae8f996f98689cefe}`;

fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        // Process and display weather data here
        console.log(data);
    })
    .catch(error => {
        console.error('Error fetching weather data:', error);
    });
