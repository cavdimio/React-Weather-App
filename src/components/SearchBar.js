/* Component that constructs the search bar */

import styled from "styled-components"
import { useState } from "react"

/* Store API KEY from openweathermap */
const {REACT_APP_WEATHER_API_KEY} = process.env;

/* Styling for div around the search box */
const SearchBox = styled.div`
    width: 100%;
    text-align: center;
    margin: 0 auto 75px;
`;

/* Styling for the search box */
const Input = styled.input.attrs(props => ({
        type:"text",
        placeholder: "E.g. London",
    }))`
    width: 60%;
    padding: 15px;
  
    appearance: none;
    background: none;
    border: none;
    outline: none;

    background-color:rgba(255, 255, 255, 0.6);
    border-radius: 16px 16px 16px 16px;
    box-shadow: 0px 5px rgba(0, 0, 0, 0.6);
    margin-top: 5px;

    color: #313131;
    font-size: 20px;
    transition: 0.4s ease;

    &:focus{
        background-color: rgba(255, 255, 255, 0.75);
    }
`;

/* Search bar component */
const SearchBar = ({ handleWeather, handleCityList }) => {

    /* Query: City-name that is being inserted from the user */
    const [query, setQuery] = useState("");

    const search = (evt) => {
    if (evt.key === "Enter") {
    
        /* Fetch data from local storage */
        var cityList = JSON.parse(window.localStorage.getItem('weather-app-cityList'));
        /* Check if cityList is a non-existent variable in localStorage */
        if(cityList === null){
            /* CityList doesn't exist in local Storage; create it */
            cityList = [];
        }

        /* Check if city is in the list */
        var cityIsInList = false;
        var searchedCity;
        var foundCity; 

        cityList.forEach( city => {
            if(query.toLowerCase() === city.query || query === city.cityName){
                cityIsInList = true;
                foundCity = city;
                /* Delete the city */
                cityList = cityList.filter((city) => {
                    return city !== foundCity;
                })
                /*  Insert the city again in order to go to the top of the list */
                cityList.push(foundCity);
            }
        });
       
        if(cityIsInList)
        {    
            /* City is in the list, so return the city */ 
            searchedCity = foundCity;
            /* Return foundCity to App.js*/
            handleWeather(searchedCity);
            /* Return cityList to App.js*/
            handleCityList(cityList);
            setQuery("");
        }
        else
        {
            /* City is not in the list, continue with API */
            /* Fetch data from Weather API */
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&APPID=${REACT_APP_WEATHER_API_KEY}`)
            .then((res) => res.json())
            .then((result) => {

                /* Store searched city's weather */
                searchedCity = {
                    query: query.toLowerCase(),
                    cityName: result.name,
                    countryCode: result.sys.country,
                    temperature: Math.round(result.main.temp),
                    weatherTitle: result.weather[0].main,
                    weatherDescription: result.weather[0].description
                }
                /* Save to list */
                cityList.push(searchedCity);

                var maxCityListLength = 10; 
                /* Check if list has more than 10 cities */
                if(cityList.length > maxCityListLength){
                    /* Slice the first(oldest) element */
                    cityList = cityList.slice(cityList.length-maxCityListLength, cityList.length);
                }

                /* Add data to localStorage */
                localStorage.setItem('weather-app-cityList', JSON.stringify(cityList));
           
                /* Pass data from API to App.js */
                handleWeather(searchedCity);

                /* Return cityList to App.js*/
                handleCityList(cityList);

                setQuery("");
            })
            .catch(err => {
                /* User inserted uncorrect value; create error & errorMessage */
                var error = {
                    errorCode: 500,
                    errorMessage: "Sorry! City \"" + query + "\" not found. Please type again!"
                }
                setQuery("");
                /* Return error instead of weather */
                handleWeather(error)
            });
        }  
    }
  };

    return (
        <SearchBox>
            <Input onChange={e => setQuery(e.target.value)} 
                   value={query}  onKeyPress={search}/>
        </SearchBox>
    )
}

export default SearchBar
