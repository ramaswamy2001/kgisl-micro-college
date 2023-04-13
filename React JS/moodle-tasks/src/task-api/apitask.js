import "./task-api.css";
import { useState } from "react";
const api = {
  key: "10d0856f549c63283f2d565585a81f5b",
  base: "https://api.openweathermap.org/data/2.5/",
};
function Weather() {
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState({});  
  const searchPressed = () => {
    fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        setWeather(result);
      });
  };
  return (
    <div className="App">
      <header className="App-header">
       
        <h1>Weather App</h1>

        <div>
          <input
            type="text"
            placeholder="Enter city/town..."
            onChange={(e) => setSearch(e.target.value)}
          />
          <button onClick={searchPressed}>Search</button>
        </div>

        {typeof weather.main !== "undefined" ? (
          <div>
            <p>{weather.name}</p>

            <p>{weather.main.temp}°C</p>

            <p>{weather.weather[0].main}</p>

            <p>({weather.weather[0].description})</p>
          </div>
        ) : (
          ""
        )}
      </header>
    </div>
  );
}

export default Weather;