/* Component that shows the location */

import styled from "styled-components"

/* Styling for the div around the location */
const LocationStyle = styled.div`
    color: rgb(238, 238, 238);
    font-size: 32px;
    font-weight: 500;
    text-shadow: 3px 3px rgba(50, 50, 70, 0.8);
`;

/* Location component */
const Location = ({query}) => {
    return (
        <LocationStyle>
            {query}
        </LocationStyle>
    )
}

export default Location
