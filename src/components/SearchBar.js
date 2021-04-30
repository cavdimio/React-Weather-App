/* Component that constructs the search bar */

import styled from "styled-components"
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from "react-places-autocomplete"
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
        const lngLat = await getLatLng(results[0]);

        var cityName = "", countryCode, stateCode = "" 

        /* Reform the query */
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

        if( cityName === ""){
            results[0].address_components.forEach(address => {
                if(address.types[0] === "administrative_area_level_1"){
                    cityName = address.long_name;
                    query = cityName + "," + countryCode;
                }
            })
        }
        else if( countryCode === "US"){
            query = cityName + "," + stateCode + "," + countryCode;        
        }
        else { 
            query = cityName + "," + countryCode;
        }

        var searchedCity;

        const excludePart = "current,minutely,hourly,alerts"
        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lngLat.lat}&lon=${lngLat.lng}&exclude=${excludePart}&units=metric&appid=${REACT_APP_WEATHER_API_KEY}`)
            .then( (response) => response.json())
            .then((forecastData) => {

                console.log(forecastData);
                
                /* Convert raw data from API to the wanted form */
                var weatherData = dataManipulation(forecastData);

                /* Store searched city's weather */
                searchedCity = {
                    query: query,
                    weatherData: weatherData
                }

                /* Pass data from API to App.js */
                handleWeather(searchedCity);
      
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
    };

    const handleChange = (value) => {
        setQuery(value)
    };

    const dataManipulation = (data) => {

        var returnedData = {
            today : {
                date : dateBuilder(data.daily[0].dt),
                temperature: [ Math.round(data.daily[0].temp.morn) , Math.round(data.daily[0].temp.day) , Math.round(data.daily[0].temp.eve) , Math.round(data.daily[0].temp.night)],
                feels_like: [ Math.round(data.daily[0].feels_like.morn) , Math.round(data.daily[0].feels_like.day) , Math.round(data.daily[0].feels_like.eve) , Math.round(data.daily[0].feels_like.night)],
                humidity:  data.daily[0].humidity,
                title: data.daily[0].weather[0].main,
                description: data.daily[0].weather[0].description,
                icon: data.daily[0].weather[0].icon,
                wind : {
                    degree: data.daily[0].wind_deg,
                    speed: data.daily[0].wind_speed,
                }
            },
            forecastdays : [
                {
                    date : dateBuilder(data.daily[1].dt),
                    temperature: [ Math.round(data.daily[1].temp.morn) , Math.round(data.daily[1].temp.day) , Math.round(data.daily[1].temp.eve) , Math.round(data.daily[1].temp.night)],
                    feels_like: [ Math.round(data.daily[1].feels_like.morn) , Math.round(data.daily[1].feels_like.day) , Math.round(data.daily[1].feels_like.eve) , Math.round(data.daily[1].feels_like.night)],
                    humidity:  data.daily[1].humidity,
                    title: data.daily[1].weather[0].main,
                    description: data.daily[1].weather[0].description,
                    icon: data.daily[1].weather[0].icon,
                    wind : {
                        degree: data.daily[1].wind_deg,
                        speed: data.daily[1].wind_speed,
                    }
                }, 
                {
                    date : dateBuilder(data.daily[2].dt),
                    temperature: [ Math.round(data.daily[2].temp.morn) , Math.round(data.daily[2].temp.day) , Math.round(data.daily[2].temp.eve) , Math.round(data.daily[2].temp.night)],
                    feels_like: [ Math.round(data.daily[2].feels_like.morn) , Math.round(data.daily[2].feels_like.day) , Math.round(data.daily[2].feels_like.eve) , Math.round(data.daily[2].feels_like.night)],
                    humidity:  data.daily[2].humidity,
                    title: data.daily[2].weather[0].main,
                    description: data.daily[2].weather[0].description,
                    icon: data.daily[2].weather[0].icon,
                    wind : {
                        degree: data.daily[2].wind_deg,
                        speed: data.daily[2].wind_speed,
                    }
                }, 
                {
                    date : dateBuilder(data.daily[3].dt),
                    temperature: [ Math.round(data.daily[3].temp.morn) , Math.round(data.daily[3].temp.day) , Math.round(data.daily[3].temp.eve) , Math.round(data.daily[3].temp.night)],
                    feels_like: [ Math.round(data.daily[3].feels_like.morn) , Math.round(data.daily[3].feels_like.day) , Math.round(data.daily[3].feels_like.eve) , Math.round(data.daily[3].feels_like.night)],
                    humidity:  data.daily[3].humidity,
                    title: data.daily[3].weather[0].main,
                    description: data.daily[3].weather[0].description,
                    icon: data.daily[3].weather[0].icon,
                    wind : {
                        degree: data.daily[3].wind_deg,
                        speed: data.daily[3].wind_speed,
                    }
                },
                {
                    date : dateBuilder(data.daily[4].dt),
                    temperature: [ Math.round(data.daily[4].temp.morn) , Math.round(data.daily[4].temp.day) , Math.round(data.daily[4].temp.eve) , Math.round(data.daily[4].temp.night)],
                    feels_like: [ Math.round(data.daily[4].feels_like.morn) , Math.round(data.daily[4].feels_like.day) , Math.round(data.daily[4].feels_like.eve) , Math.round(data.daily[4].feels_like.night)],
                    humidity:  data.daily[4].humidity,
                    title: data.daily[4].weather[0].main,
                    description: data.daily[4].weather[0].description,
                    icon: data.daily[4].weather[0].icon,
                    wind : {
                        degree: data.daily[4].wind_deg,
                        speed: data.daily[4].wind_speed,
                    }
                },
                {
                    date : dateBuilder(data.daily[5].dt),
                    temperature: [ Math.round(data.daily[5].temp.morn) , Math.round(data.daily[5].temp.day) , Math.round(data.daily[5].temp.eve) , Math.round(data.daily[5].temp.night)],
                    feels_like: [ Math.round(data.daily[5].feels_like.morn) , Math.round(data.daily[5].feels_like.day) , Math.round(data.daily[5].feels_like.eve) , Math.round(data.daily[5].feels_like.night)],
                    humidity:  data.daily[5].humidity,
                    title: data.daily[5].weather[0].main,
                    description: data.daily[5].weather[0].description,
                    icon: data.daily[5].weather[0].icon,
                    wind : {
                        degree: data.daily[5].wind_deg,
                        speed: data.daily[5].wind_speed,
                    }
                },
                {
                    date : dateBuilder(data.daily[6].dt),
                    temperature: [ Math.round(data.daily[6].temp.morn) , Math.round(data.daily[6].temp.day) , Math.round(data.daily[6].temp.eve) , Math.round(data.daily[6].temp.night)],
                    feels_like: [ Math.round(data.daily[6].feels_like.morn) , Math.round(data.daily[6].feels_like.day) , Math.round(data.daily[6].feels_like.eve) , Math.round(data.daily[6].feels_like.night)],
                    humidity:  data.daily[6].humidity,
                    title: data.daily[6].weather[0].main,
                    description: data.daily[6].weather[0].description,
                    icon: data.daily[6].weather[0].icon,
                    wind : {
                        degree: data.daily[6].wind_deg,
                        speed: data.daily[6].wind_speed,
                    }
                },
                {
                    date : dateBuilder(data.daily[7].dt),
                    temperature: [ Math.round(data.daily[7].temp.morn) , Math.round(data.daily[7].temp.day) , Math.round(data.daily[7].temp.eve) , Math.round(data.daily[7].temp.night)],
                    feels_like: [ Math.round(data.daily[7].feels_like.morn) , Math.round(data.daily[7].feels_like.day) , Math.round(data.daily[7].feels_like.eve) , Math.round(data.daily[7].feels_like.night)],
                    humidity:  data.daily[7].humidity,
                    title: data.daily[7].weather[0].main,
                    description: data.daily[7].weather[0].description,
                    icon: data.daily[7].weather[0].icon,
                    wind : {
                        degree: data.daily[7].wind_deg,
                        speed: data.daily[7].wind_speed,
                    }
                },
            ]    
        }

        return returnedData;
    };
    

    /* Date constructor */
    const dateBuilder = (timestamp) => {
        
        let months = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
        ];
        let days = [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
        ];
  
        var rawDate = new Date(timestamp * 1000);
    
        let day = days[rawDate.getDay()];
        let date = rawDate.getDate();
        let month = months[rawDate.getMonth()];
        let year = rawDate.getFullYear();
  
        return `${day} ${date} ${month} ${year}`;
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
