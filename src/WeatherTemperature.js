import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  function fahrenheitMax() {
    return (props.maximum * 9) / 5 + 32;
  }

  function fahrenheitMin() {
    return (props.minimum * 9) / 5 + 32;
  }

  if (unit === `celsius`) {
    return (
      <div>
        <div className="weatherTemperature">
          <p className="daily-temperature">{Math.round(props.celsius)}°</p>
          <strong>
            <p className="max-min-temperature">
              {Math.round(props.maximum)}° / {Math.round(props.minimum)}°
            </p>
          </strong>
        </div>
        <div className="unitsLink">
          <a href="/" onClick={showFahrenheit}>
            °F
          </a>{" "}
          | °C
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div className="weatherTemperature">
          <p className="daily-temperature">{Math.round(fahrenheit())}°</p>
          <strong>
            <p className="max-min-temperature">
              {Math.round(fahrenheitMax())}° / {Math.round(fahrenheitMin())}°
            </p>
          </strong>
        </div>
        <div className="unitsLink">
          °F |{" "}
          <a href="/" onClick={showCelsius}>
            °C
          </a>
        </div>
      </div>
    );
  }
}
