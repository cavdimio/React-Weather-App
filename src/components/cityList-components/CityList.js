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
    return (
        <CityListTitleStyle>
        {
          cityList.map( (city, key) => {
            return (
              <li key={key}> {city.cityName} {city.temperature}°C</li>
            );
          })
        }
      </CityListTitleStyle>
    )
}

export default CityList
