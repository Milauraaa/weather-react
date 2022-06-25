import React from "react";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h3 className="m-4 daily-description">
        {" "}
        Right now in <span className="city">{props.data.city}</span>, it's{" "}
        {props.data.description}.
      </h3>
      <div className="d-flex justify-content-evenly m-5">
        <div className="animated-icon">
          <WeatherIcon code={props.data.icon} size={100} />
        </div>
        <div className="temperature">
          <WeatherTemperature
            celsius={props.data.temperature}
            maximum={props.data.maxTemp}
            minimum={props.data.minTemp}
          />
        </div>
        <div className="parameters">
          <div className="d-flex justify-content-evently">
            <div className="icon">
              <i className="fa-solid fa-wind"></i>
            </div>
            <div className="ms-3">
              <strong>
                {" "}
                <span className="numbers">{props.data.wind}</span>{" "}
              </strong>{" "}
              <small>km/h</small>
            </div>
          </div>
          <div className="d-flex justify-content-evently">
            <div className="icon">
              <i className="fa-solid fa-droplet"></i>
            </div>
            <div className="ms-4">
              <strong>
                {" "}
                <span className="numbers">{props.data.humidity}</span>{" "}
              </strong>{" "}
              <small> %</small>
            </div>
          </div>
          <div className="d-flex justify-content-evently">
            <div className="icon">
              <i className="fa-solid fa-arrow-down-long"></i>{" "}
            </div>
            <div className="ms-4">
              <strong>
                {" "}
                <span className="numbers">{props.data.pressure}</span>{" "}
              </strong>{" "}
              <small> pa</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
