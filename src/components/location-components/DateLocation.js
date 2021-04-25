/* Component that constructs and shows the date */

import styled from "styled-components"

/* Styling for the div around the date */
const DateStyle = styled.div`
  color: #fff;
  font-size: 20px;
  font-weight: 420;
  font-style: italic;
  text-shadow: 2px 2px rgba(50, 50, 70, 0.5);
`;



/* Date component */
const DateLocation = () => {

  /* Save date to localStorage */
  var date = Date();
  localStorage.setItem('weather-app-date', JSON.stringify(date.substr(0, 15)));

  return (
    <DateStyle>
      {/* {dateBuilder(new Date())} */}
    </DateStyle>
  )
}

export default DateLocation
