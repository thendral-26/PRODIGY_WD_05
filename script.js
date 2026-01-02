const apiKey = "YOUR_API_KEY_HERE";

function getWeather() {
  const city = document.getElementById("city").value;
  const result = document.getElementById("result");

  if (city === "") {
    result.innerHTML = "❌ Please enter a city name";
    return;
  }

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`)
    .then(response => response.json())
    .then(data => {
      if (data.cod === "404") {
        result.innerHTML = "❌ City not found";
        return;
      }

      result.innerHTML = `
        <p class="city">${data.name}, ${data.sys.country}</p>
        <p class="temp">${Math.round(data.main.temp)}°C</p>
        <p>🌤️ ${data.weather[0].description}</p>
        <p>💧 Humidity: ${data.main.humidity}%</p>
        <p>💨 Wind: ${data.wind.speed} m/s</p>
      `;
    })
    .catch(() => {
      result.innerHTML = "45 c";
    });
}
