import React, { useState } from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  const [unit, setUnit] = useState("celsius");

  function convertToFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function convertToCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function fahrenheitTemperature() {
    return (props.data.temperature * 9) / 5 + 32;
  }

  return (
    <div className="WeatherInfo">
      <div className="row">
        <div className="col-6">
          <h1>{props.data.city}</h1>
          <ul>
            <li>
              <FormattedDate date={props.data.date} />, {props.data.description}
            </li>
            <li>
              Humidity: <strong>{props.data.humidity}%</strong>, Wind:{" "}
              <strong>{props.data.wind}km/h</strong>
            </li>
          </ul>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-8">
          <div className="temperature-container d-flex justify-content-end">
            <WeatherIcon code={props.data.icon} size={52} />
            <div>
              <span className="temperature">
                {unit === "celsius"
                  ? Math.round(props.data.temperature)
                  : Math.round(fahrenheitTemperature())}
              </span>
              <span className="unit">
                {unit === "celsius" ? "°C" : "°F"} |{" "}
                {unit === "celsius" ? (
                  <a href="/" onClick={convertToFahrenheit}>
                    °F
                  </a>
                ) : (
                  <a href="/" onClick={convertToCelsius}>
                    °C
                  </a>
                )}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
