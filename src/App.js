import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import LocationBox from "./components/LocationBox";
import WelcomeMessage from "./components/WelcomeMessage";
import ErrorHandling from "./components/ErrorHandling";
import DesktopTab from "./components/DesktopTab";
import ReactGA from "react-ga";

function App() {

  /* Google analytics */
  ReactGA.initialize(process.env.REACT_APP_GA_TRACKING_CODE);
  ReactGA.pageview(window.location.pathname + window.location.search);

  /* Weather: Object with the weather data that come from the Weather API */
  const [weather, setWeather] = useState("");

  /* Function that saves the weather data */
  const onChangeWeather = (changedWeather) => {
    setWeather(changedWeather); 
  };

  //Width 
  const [width, setWidth] = useState(window.innerWidth);

  useEffect( () => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  });
  
  return (
    /* Set background image according to weather*/
    <div className={
          ((weather.weatherTitle === "Clouds") ? "background-img background-img-clouds" :
          ((weather.weatherTitle === "Mist") ? "background-img background-img-mist" :
          ((weather.weatherTitle === "Snow") ? "background-img background-img-snow" :
          ((weather.weatherTitle === "Rain") ? "background-img background-img-rain" :
          ((weather.weatherTitle === "Thunderstorm") ? "background-img background-img-thunderstorm" :
          ((weather.weatherTitle === "Drizzle") ? "background-img background-img-drizzle" :
          "background-img" ))))))
    }>
      <main>
        <Header />
        <SearchBar handleWeather={onChangeWeather} />
        {/* Check if user hasn't typed anything yet */}
        {weather === "" ? (
          /* User hasn't typed anything yet; show welcome message */
          <WelcomeMessage />  ) :
          /* Check if user typed unfound city */
         ( weather.errorCode !== undefined ? (
           /* User typed unfound city; show error message  */
           <ErrorHandling errorMessage={weather.errorMessage}/> ) :
         ( /* User typed found city; show weather statistics */
          <>
            <LocationBox query={weather.query} />
            <DesktopTab windowWidth={width} 
                        temperature={weather.weatherData.today.temperature}
                        typeOfWeather={weather.weatherData.today.description}
            />
            
          </> ))}
            
      </main>
    </div>
  );
}

export default App;
