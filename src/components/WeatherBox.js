/* Component that constructs the weather box */

import styled from "styled-components"
import Temperature from "./weather-components/Temperature"
import Weather from "./weather-components/Weather"

/* Styling for div around the weather box */
const WeatherBoxStyle = styled.div`
    margin-right: 10%;
    margin-left: 10%;
    text-align: center;
`;

/* Weather box component */
const WeatherBox = ({ temperature, typeOfWeather }) => {
    return (
        <WeatherBoxStyle>
            <Temperature temperature={temperature}/>
            <Weather typeOfWeather={typeOfWeather}/>
        </WeatherBoxStyle>
    )
}

export default WeatherBox
