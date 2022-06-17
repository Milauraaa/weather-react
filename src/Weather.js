import React, { useState } from "react";
import axios from "axios";
import ReactAnimatedWeather from "react-animated-weather";

export default function Weather() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({});

  function displayWeather(response) {
    setWeather({
      temperature: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      maxTemp: Math.round(response.data.main.temp_max),
      minTemp: Math.round(response.data.main.temp_min),
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "2f508dedc6bfa0bf55aae24e4db29f0a";
    let units = "metric";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(url).then(displayWeather);
  }
  function updateCity(event) {
    setCity(event.target.value);
  }
  let form = (
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
  );
  return (
    <div className="container">
      {form}
      <h3 className="m-4 daily-description">
        {" "}
        Right now in <span className="city">{city}</span>, it's{" "}
        {weather.description}.
      </h3>
      <div className="d-flex justify-content-evenly">
        <ReactAnimatedWeather
          icon="CLEAR_DAY"
          color="#ffcc00"
          size="70px"
          animate={true}
        />

        <div>
          <strong>
            <p className="daily-temperature">{weather.temperature}°</p>
            <p className="max-min-temperature">
              {weather.maxTemp}° / {weather.minTemp}°
            </p>
          </strong>
        </div>
        <div className="parameters">
          <div className="d-flex justify-content-evently">
            <div className="icon">
              <i className="fa-solid fa-wind"></i>
            </div>
            <div className="ms-3">
              <strong>
                {" "}
                <span className="numbers">{weather.wind}</span>{" "}
              </strong>{" "}
              km/h
            </div>
          </div>
          <div className="d-flex justify-content-evently">
            <div className="icon">
              <i className="fa-solid fa-droplet"></i>
            </div>
            <div className="ms-4">
              <strong>
                {" "}
                <span className="numbers">{weather.humidity}</span>{" "}
              </strong>{" "}
              %
            </div>
          </div>
          <div className="d-flex justify-content-evently">
            <div className="icon">
              <i className="fa-solid fa-umbrella"></i>{" "}
            </div>
            <div className="ms-3">
              <strong>
                {" "}
                <span className="numbers">10</span>{" "}
              </strong>{" "}
              %
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-evenly m-5">
        <div>
          IMAGE
          <strong>
            <p>26° / 16°</p>
            <p>THU</p>
          </strong>
        </div>
        <div>
          IMAGE
          <strong>
            <p>30° / 14°</p>
            <p>THU</p>
          </strong>
        </div>
        <div>
          IMAGE
          <strong>
            <p>28° / 16°</p>
            <p>THU</p>
          </strong>
        </div>
        <div>
          IMAGE
          <strong>
            <p>22° / 15°</p>
            <p>THU</p>
          </strong>
        </div>
      </div>
      <div>
        <a href="/">°F</a> | <a href="/">°C</a>
      </div>
      <div>
        <a href="/">Open-source code</a>, by Mila Yemelianenko
      </div>
    </div>
  );
}
