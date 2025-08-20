
const apiKey = "f9dc9510b1c1ef59072f2b3b2dc452e1"; // your real API key here

async function getWeather() {
  const city = document.getElementById("cityInput").value;
  const resultDiv = document.getElementById("weatherResult");
  
  resultDiv.innerHTML = "<p class='loading'>Fetching weather... ⏳</p>";

resultDiv.style.opacity = 0;
setTimeout(() => resultDiv.style.opacity = 1, 200);


  if (city === "") {
    resultDiv.innerHTML = "Please enter a city name.";
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("City not found");
    const data = await response.json();

    resultDiv.innerHTML = `
      <h2>${data.name}, ${data.sys.country}</h2>
      <img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="icon">
      <p>🌡️ Temperature:It feels like ${data.main.temp} °C</p>
      <p>💧 Humidity: ${data.main.humidity}%</p>
      <p>☁️ Condition: ${data.weather[0].description}</p>
    `;

  } catch (error) {
    resultDiv.innerHTML = "Error: please Try another city 😊" + error.message;
  }
}
