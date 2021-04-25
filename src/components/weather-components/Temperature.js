/* Component that shows the temperature */

import styled from "styled-components"


/* Styling for the div around the temperature */
const TemperatureStyle = styled.div`
  position: relative;
  display: inline-block;
  margin: 5px auto;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  padding: 0px 25px;
  color: #fff;
  font-weight: 900;
  text-shadow: 3px 6px rgba(50, 50, 70, 0.5);
  box-shadow: 3px 6px rgba(0, 0, 0, 0.2);

  @media only screen and (max-device-width: 480px) {
    font-size: 3.375rem;
  }

  @media only screen and (min-device-width: 481px) {
    font-size: 6.375rem;
  }

`;

/* Styling for the div around the temperature */
const TitleStyle = styled.h6`
  position: relative;
  display: inline-block;
  color: #fff;
  font-weight: 500;
  text-shadow: 3px 6px rgba(50, 50, 70, 0.5);

  @media only screen and (max-device-width: 480px) {
    font-size: 1rem;
  }

  @media only screen and (min-device-width: 481px) {
    font-size: 3.375rem;
  }

`;


/* Temperature component */
const Temperature = ({ temperature }) => {
  return (
    <div>
      
      
      <TemperatureStyle> 
          <TitleStyle>Morning</TitleStyle>
          <br />
        {temperature[0]}°C
      </TemperatureStyle>
      
      <TemperatureStyle>
        <TitleStyle>Day</TitleStyle>
        <br />
        {temperature[1]}°C
      </TemperatureStyle>
      
      <TemperatureStyle>
        <TitleStyle>Evening</TitleStyle>
        <br />
        {temperature[2]}°C
      </TemperatureStyle>
      
      <TemperatureStyle>
        <TitleStyle>Night</TitleStyle>
        <br />
        {temperature[3]}°C
      </TemperatureStyle>
    </div>
  )
}

export default Temperature
