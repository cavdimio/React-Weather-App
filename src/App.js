import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import LocationBox from "./components/LocationBox";
import WeatherBox from "./components/WeatherBox";
import CityListBox from "./components/CityListBox";
import WelcomeMessage from "./components/WelcomeMessage";
import ErrorHandling from "./components/ErrorHandling";
import ReactGA from "react-ga";

function App() {

  /* Google analytics */
  ReactGA.initialize(process.env.REACT_APP_GA_TRACKING_ID);
  ReactGA.pageview(window.location.pathname + window.location.search);

  /* Weather: Object with the weather data that come from the Weather API */
  const [weather, setWeather] = useState("");

  /* Bring date from local storage to compare with today's date. */
  var previousDate = JSON.parse(window.localStorage.getItem('weather-app-date'));
  /* Check if previous date exist */
  if(previousDate !== null){
    /* Previous date exists */
    var date = Date();
    /* Compare previous date with today's date   */
    if (previousDate !== date.substr(0, 15)){
      /* If different, then it's a different day & remove weather-app-cityList from LocalStorage */
      window.localStorage.removeItem('weather-app-cityList');
    }
  }
       
  /* CityList: Object with the last 10 saved searches */
  var previousCityList = JSON.parse(window.localStorage.getItem('weather-app-cityList'));
  if(previousCityList === null){
    previousCityList = [];
  }
  const [cityList, setCityList] = useState(previousCityList);
  
  /* Function that saves the weather data */
  const onChangeWeather = (changedWeather) => {
    setWeather(changedWeather); 
  };

  /* Function that saves the city list */
  const onChangeOfCityList = (changedCityList) => {
    setCityList(changedCityList);
  }

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
        <SearchBar handleWeather={onChangeWeather} handleCityList={onChangeOfCityList} />
        {/* Check if user hasn't typed anything yet */}
        {weather === "" ? (
          /* User hasn't typed anything yet; show welcome message */
          <WelcomeMessage />
          /* Check if user typed unfound city */
        ) : ( weather.errorCode !== undefined ? (
           /* User typed unfound city; show error message  */
           <ErrorHandling errorMessage={weather.errorMessage}/>
        ) : (
          /* User typed found city; show weather statistics */
          <div>
            <LocationBox city={weather.cityName} country={weather.countryCode} />
            <WeatherBox
                temperature={weather.temperature}
                typeOfWeather={weather.weatherDescription}
            />
          </div>
        ))}

        {/* Check if there is cityList */}
        {cityList.length > 0 ? (
          /* CityList exists; show city list*/
          <CityListBox cityList={cityList} />
        ) : 
        /* CityList doesn't exist; show nothing */
        ("")}
      </main>
    </div>
  );
}

export default App;
