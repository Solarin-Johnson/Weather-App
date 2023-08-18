
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Milan&appid=0fcd6a52b8947973e9492af60c94a84b`;

fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        const x = data.weather[0].description;
        const temperature = data.main.temp;

        console.log(`Weather: ${x}`);
        console.log(`Temperature: ${temperature}°C`);
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
autoResize = setInterval(() => {
    if (innerHeight < 500) {
        document.body.style.height = 500 + "px"
    } else {
        document.body.style.height = innerHeight + "px"
    }
}, 1);