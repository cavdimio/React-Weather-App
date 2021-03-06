/* Component that shows the weather */

import styled from "styled-components"

/* Styling for the div around the weather */
const WeatherStyle = styled.div`
  color: #fff;
  font-size: 48px;
  font-weight: 700;
  text-shadow: 3px 3px rgba(50, 50, 70, 0.5);
`;

/* Weather component */
const Weather = ({ typeOfWeather }) => {
    return (
        <WeatherStyle>
            {typeOfWeather}
        </WeatherStyle>
    )
}

export default Weather
