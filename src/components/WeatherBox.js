/* Component that constructs the weather box */
import { CONFIG } from "../utils/config";
import styled from "styled-components"

/* Styling for the div around the weather */
const WeatherStyle = styled.div`
  color: #fff;
  font-size: 3rem;
  font-weight: 700;
  text-shadow: 3px 3px rgba(50, 50, 70, 0.5);
`;

/* Weather box component */
const WeatherBox = () => {
    return (
        <WeatherStyle>
          description: {CONFIG.WEATHERSTATS.description} <br />
          temperature: {CONFIG.WEATHERSTATS.temperature}°C <br />
          feels like : {CONFIG.WEATHERSTATS.feels_like}°C <br />
          pressure: {CONFIG.WEATHERSTATS.pressure}  <br />
          wind_deg: {CONFIG.WEATHERSTATS.wind_deg}  <br />
          wind_gust: {CONFIG.WEATHERSTATS.wind_gust}  <br />
          wind_speed: {CONFIG.WEATHERSTATS.wind_speed}  <br /> 
        </WeatherStyle>
    )
}

export default WeatherBox
