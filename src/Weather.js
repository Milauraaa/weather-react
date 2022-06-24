import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import WeatherInfo from "./WeatherInfo";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weather, setWeather] = useState({ ready: false });

  function displayWeather(response) {
    setWeather({
      ready: true,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      city: response.data.name,
      maxTemp: response.data.main.temp_max,
      minTemp: response.data.main.temp_min,
      icon: response.data.weather[0].icon,
    });
  }

  function search() {
    const apiKey = "2f508dedc6bfa0bf55aae24e4db29f0a";
    let units = "metric";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(url).then(displayWeather);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search(city);
  }
  function updateCity(event) {
    setCity(event.target.value);
  }
  if (weather.ready) {
    return (
      <div className="container">
        <div className="form mt-3">
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              name="enter-city"
              autoComplete="off"
              className="input"
              onChange={updateCity}
              required
            />
            <label for="enter-city" className="label-name">
              <span className="content-input">Enter a city...</span>
            </label>
          </form>
        </div>
        <WeatherInfo data={weather} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
