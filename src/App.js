import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import LocationBox from "./components/LocationBox";
import WeatherBox from "./components/WeatherBox";

function App() {
  /* Weather: Object with the weather data that come from the Weather API */
  const [weather, setWeather] = useState("");

  /* Function that saves the weather data */
  const onChangeWeather = (changedWeather) => {
    setWeather(changedWeather); 
  };

  return (
    /* Set background image according to weather*/
    <div className={
      (typeof weather.main =="undefined") ? "background-img" : 
          ((weather.weather[0].main === "Clouds") ? "background-img background-img-clouds" :
          ((weather.weather[0].main === "Mist") ? "background-img background-img-mist" :
          ((weather.weather[0].main === "Snow") ? "background-img background-img-snow" :
          ((weather.weather[0].main === "Rain") ? "background-img background-img-rain" :
          ((weather.weather[0].main === "Thunderstorm") ? "background-img background-img-thunderstorm" :
          ((weather.weather[0].main === "Drizzle") ? "background-img background-img-drizzle" :
          "background-img" ))))))
    }>
      <main>
        <Header />
        <SearchBar handleWeather={onChangeWeather} />
        {/* Check if user has inserted wrong value or no value */}
        {typeof weather.main !== "undefined" ? (
          /* User inserted valid value (city) */
          <div>
            <LocationBox city={weather.name} country={weather.sys.country} />
            <WeatherBox
              icon={weather.weather[0].icon}
              temperature={weather.main.temp}
              typeOfWeather={weather.weather[0].description}
            />
          </div>
        ) : (
          /* User inserted invalid value (city); Show nothing in this case */
          ""
        )}
      </main>
    </div>
  );
}

export default App;
