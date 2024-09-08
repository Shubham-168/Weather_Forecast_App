import React, { useState } from 'react';
import WeatherDisplay from './components/WeatherDisplay';
import './App.css';

const API_KEY = '5a62714c0ef5c8dc40a146b769365fcb';

function App() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState('');

  const fetchWeather = async () => {
    if (!city) {
      setError('Please enter a city');
      return;
    }
    setError('');
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      const data = await response.json();
      if (data.cod === 200) {
        console.log(data)
        setWeatherData(data);
      } else {
        setError('City not found');
        setWeatherData(null);
      }
    } catch (error) {
      setError('Failed to fetch weather data');
    }
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Weather Forecast</h1>
        <div className="search-container">
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Enter city name"
          />
          <button onClick={fetchWeather}>Search</button>
        </div>
        {error && <p className="error-message">{error}</p>}
      </header>
      {weatherData && <WeatherDisplay data={weatherData} />}
    </div>
  );
}

export default App;
