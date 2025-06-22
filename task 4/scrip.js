const API_KEY = '06ee2a9079e9dbf621f1e422c4ac4e6e'; 

function getWeatherByCity() {
  const city = document.getElementById('cityInput').value;
  if (!city) return alert("Please enter a city name.");
  fetchWeather(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
}

function getWeatherByLocation() {
  if (!navigator.geolocation) {
    return alert("Geolocation is not supported by your browser.");
  }

  navigator.geolocation.getCurrentPosition(
    position => {
      const { latitude, longitude } = position.coords;
      fetchWeather(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`);
    },
    () => alert("Unable to retrieve your location.")
  );
}

function fetchWeather(url) {
  fetch(url)
    .then(response => {
      if (!response.ok) throw new Error("Weather data not found.");
      return response.json();
    })
    .then(data => displayWeather(data))
    .catch(err => alert(err.message));
}

function displayWeather(data) {
  document.getElementById('location').textContent = `${data.name}, ${data.sys.country}`;
  document.getElementById('description').textContent = data.weather[0].description;
  document.getElementById('temperature').textContent = `Temperature: ${data.main.temp}°C`;
  document.getElementById('humidity').textContent = `Humidity: ${data.main.humidity}%`;

  document.getElementById('weatherInfo').classList.remove('hidden');
}
