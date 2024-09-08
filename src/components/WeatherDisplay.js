import React from 'react';
import './WeatherDisplay.css';

const WeatherDisplay = ({ data }) => {
  const { name, main, weather, wind, sys } = data;
  const iconUrl = `http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;

  return (
    <div className="weather-display">
      <h2>
        {name}, {sys.country}
      </h2>
      <img src={iconUrl} alt={weather[0].description} />
      <p className="temperature">{Math.round(main.temp)}°C</p>
      <p>{weather[0].description}</p>
      <p>Humidity: {main.humidity}%</p>
      <p>Wind Speed: {wind.speed} m/s</p>
    </div>
  );
};

export default WeatherDisplay;
