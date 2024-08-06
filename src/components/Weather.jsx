import React, { useEffect, useState } from 'react';
import './Weather.css';
import search_icon from '../assets/search.png';
import clear_icon from '../assets/clear.png';
import wind_icon from '../assets/wind.png';
import humidity_icon from '../assets/humidity.png';

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const [city, setCity] = useState('Paris');

  const search = async (city) => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_APP_ID}`;
      const response = await fetch(url);
      const data = await response.json();
      if (response.ok) {
        setWeatherData({
          humidity: data.main.humidity,
          windSpeed: (data.wind.speed * 3.6).toFixed(2), // Convert m/s to km/h
          temperature: Math.floor(data.main.temp),
          location: data.name,
          icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
        });
        setError(null);
      } else {
        setError(data.message);
      }
    } catch (error) {
      setError('Error fetching data');
    }
  };

  useEffect(() => {
    search(city);
  }, [city]);

  const handleSearch = () => {
    search(city);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className='weather'>
      <div className='search-bar'>
        <input 
          type="text" 
          placeholder='Search' 
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyDown={handleKeyDown} 
        />
        <img 
          src={search_icon} 
          alt="search button" 
          onClick={handleSearch} 
          style={{ cursor: 'pointer' }} 
        />
      </div>
      {error && <p className="error">{error}</p>}
      {weatherData && (
        <>
          <img src={weatherData.icon} alt="weather icon" className='weather-icon' />
          <p className='temperature'>{weatherData.temperature}°C</p>
          <p className='location'>{weatherData.location}</p>
          <div className='weather-data'>
            <div className='col'>
              <img src={humidity_icon} alt="humidity icon" />
              <div>
                <p>{weatherData.humidity}%</p>
                <p>Humidity</p>
              </div>
            </div>
            <div className='col'>
              <img src={wind_icon} alt="wind icon" />
              <div>
                <p>{weatherData.windSpeed} km/h</p>
                <p>Wind Speed</p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Weather;
