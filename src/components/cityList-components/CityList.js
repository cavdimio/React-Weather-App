/* Component that shows the city list */

import styled from "styled-components"

/* Styling for the ul of the cities */
const CityListTitleStyle = styled.ul`
  color: #fff;
  font-size: 20px;
  font-weight: 420;
  text-shadow: 2px 2px rgba(50, 50, 70, 0.5);
  list-style: none;
  text-align: center;
`;

/* City List component */
const CityList = ( { cityList } ) => {
    /* Reverse city list in order for the more recent to appear on the top */
    var reversedCityList = cityList.map(city => city).reverse();

    return (
        <CityListTitleStyle>
        {
          reversedCityList.map( (city, key) => {
            return (
              <li key={key}> {city.query} {city.temperature}°C</li>
            );
          })
        }
      </CityListTitleStyle>
    )
}

export default CityList
