import React from "react";
import ReactAnimatedWeather from "react-animated-weather";
import WeatherIcon from "./WeatherIcon";

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
          <WeatherIcon code={props.data.icon} alt={props.data.description} />
        </div>
        <div>
          <p className="daily-temperature">{props.data.temperature}°</p>
          <strong>
            <p className="max-min-temperature">
              {props.data.maxTemp}° / {props.data.minTemp}°
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
                <span className="numbers">{props.data.wind}</span>{" "}
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
                <span className="numbers">{props.data.humidity}</span>{" "}
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
          <div className="animated-icon">
            <ReactAnimatedWeather
              icon="PARTLY_CLOUDY_DAY"
              color="grey"
              size="20px"
              animate={true}
            />
          </div>
          <strong>
            <p>26° / 16°</p>
            <p>THU</p>
          </strong>
        </div>
        <div>
          <div className="animated-icon">
            <ReactAnimatedWeather
              icon="CLOUDY"
              color="grey"
              size="20px"
              animate={true}
            />
          </div>
          <strong>
            <p>30° / 14°</p>
            <p>FRI</p>
          </strong>
        </div>
        <div>
          <div className="animated-icon">
            <ReactAnimatedWeather
              icon="CLEAR_DAY"
              color="#ffcc00"
              size="20px"
              animate={true}
            />
          </div>
          <strong>
            <p>28° / 16°</p>
            <p>SAT</p>
          </strong>
        </div>
        <div>
          <div className="animated-icon">
            <ReactAnimatedWeather
              icon="PARTLY_CLOUDY_DAY"
              color="grey"
              size="20px"
              animate={true}
            />
          </div>
          <strong>
            <p>22° / 15°</p>
            <p>SUN</p>
          </strong>
        </div>
      </div>
      <div>
        <a href="/">°F</a> | <a href="/">°C</a>
      </div>
    </div>
  );
}
