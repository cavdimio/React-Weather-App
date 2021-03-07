/* Component that shows the title of the city-list */

import styled from "styled-components"

/* Styling for the h3 city-list-title */
const CityListTitleStyle = styled.h3`
    margin-top: 1.2rem;
    color: rgb(238, 238, 238);
    text-shadow: 3px 3px rgba(50, 50, 70, 0.5);
    text-align: center;
    cursor: default;
    text-decoration: underline;
    font-weight: 450;
    font-size: 1.75rem;
`;

/* City List Title component */
const CityListTitle = () => {
    return (
        <CityListTitleStyle> 
             10 Last Searches 
        </CityListTitleStyle>
    )
}

export default CityListTitle
