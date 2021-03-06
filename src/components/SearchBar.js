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
const SearchBar = ({ handleWeather }) => {

    /* Query: City-name that is being inserted from the user */
    const [query, setQuery] = useState("");

    const search = (evt) => {
    if (evt.key === "Enter") {
      /* Fetch data from Weather API */
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&APPID=${REACT_APP_WEATHER_API_KEY}`)
        .then((res) => res.json())
        .then((result) => {
            /* Pass data from API to App.js */
            handleWeather(result);
            setQuery("");
        });
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
