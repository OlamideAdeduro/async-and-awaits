const button = document.getElementById("checkWeather");
const cityInput = document.getElementById("city");
const result = document.getElementById("result");

async function getWeather() {

    const city = cityInput.value;

    if (city === "") {
        result.innerHTML = "Please enter a city.";
        return;
    }

    result.innerHTML = "Loading...";

    try {

        const response = await fetch(
            `https://wttr.in/${city}?format=j1`
        );

        const data = await response.json();

        const temperature = data.current_condition[0].temp_C;
        const weather = data.current_condition[0].weatherDesc[0].value;

        result.innerHTML = `
            <h2>${city}</h2>
            <p>🌡️ Temperature: ${temperature}°C</p>
            <p>☁️ Weather: ${weather}</p>
        `;

    } catch (error) {

        result.innerHTML = "Unable to get weather information.";

    }
}

button.addEventListener("click", getWeather);