/* Component that constructs the box around the location & the date */

import styled from "styled-components"
import Location from "./location-components/Location"
import DateLocation from "./location-components/DateLocation"

/* Styling for the div around the location box */
const LocationBoxStyle = styled.div`
    width: 100%;
    text-align: center;
    margin: 0 auto 25px;
`;

/* Location box component */
const LocationBox = ({city, country}) => {
    return (
        <LocationBoxStyle>
            <Location city={city} country={country}/>
            <DateLocation />
        </LocationBoxStyle>
    )
}

export default LocationBox
