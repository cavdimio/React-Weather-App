/* Component that constructs the search bar */

import styled from "styled-components"
import PlacesAutocomplete, { geocodeByAddress } from "react-places-autocomplete"
import { useState } from "react"

/* Store API KEY from openweathermap */
const {REACT_APP_WEATHER_API_KEY} = process.env;

/* Styling for div around the search box */
const SearchBox = styled.div`
    width: 100%;
    text-align: center;
    margin: 0 auto 75px;
`;


/* Search bar component */
const SearchBar = ({ handleWeather, handleCityList }) => {

    /* Query: City-name that is being inserted from the user */
    const [query, setQuery] = useState("");

    const handleSelect = async query => {

        //Check if there is a comma 
        const results = await geocodeByAddress(query);

        var cityName, countryCode, stateCode = "" 

        results[0].address_components.forEach(address => {
            if(address.types[0] === "locality"){
                cityName = address.short_name;
            }else if (address.types[0] === "country"){
                countryCode = address.short_name;
            }
            else if (address.types[0] === "administrative_area_level_1"){
                stateCode = address.short_name;
            }
        });
        if( countryCode === "US"){
            query = cityName + "," + stateCode + "," + countryCode;        
        }
        else { 
            query = cityName + "," + countryCode;
        }
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
            if(query === city.query){
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
                    query: query,
                    coordinates: { lat: result.coord.lat , lon: result.coord.lon },
                    temperature: Math.round(result.main.temp),
                    weatherTitle: result.weather[0].main,
                    weatherDescription: result.weather[0].description
                }

                var cityIsInList = false;
                cityList.forEach( city => {
                    if(searchedCity.query === city.query){
                        cityIsInList = true;
                    }
                });
                if (!cityIsInList){
                    /* Save to list */
                    cityList.push(searchedCity);
                }

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
    };

    const handleChange = (value) => {
        setQuery(value)
    };
    
    return (
        <SearchBox>
            <PlacesAutocomplete 
            value={query}
            onChange={handleChange} 
            onSelect={handleSelect}                   
            searchOptions={ {types: ['(cities)']} }>

            {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                <div>
                    <input
                        {...getInputProps({
                                placeholder: "E.g. London...",
                                className: 'location-search-input',
                        })}
                    />
                    <ul className="autocomplete-dropdown-container">
                        {loading ? <div>Loading...</div> : null}
                        
                        {suggestions.map(suggestion => {
                            const style = {
                                fontFamily: "Poppins",  
                                padding: "10px",
                                fontSize: "17px",
                                width: "60%",
                                margin: "0 auto",
                                backgroundColor: suggestion.active ? 'rgba(255, 255, 255, 0.6)' : 'rgba(255, 255, 255, 0.3)', 
                                fontWeight: suggestion.active ? 'bold' : 'normal', 
                                cursor: 'pointer'
                            }
                            return (
                                <li
                                    {...getSuggestionItemProps(suggestion, { 
                                        style
                                        })}
                                >
                                    <span>{suggestion.description}</span>
                                </li>
                            );
                        })}
                    </ul> 
                </div>
            )}
            </PlacesAutocomplete> 
        </SearchBox>
    )
}

export default SearchBar
