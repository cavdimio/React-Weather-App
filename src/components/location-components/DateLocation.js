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

/* Date constructor */
const dateBuilder = (d) => {
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let day = days[d.getDay()];
  let date = d.getDate();
  let month = months[d.getMonth()];
  let year = d.getFullYear();

  return `${day} ${date} ${month} ${year}`;
};

/* Date component */
const DateLocation = () => {

  /* Save date to localStorage */
  var date = Date();
  localStorage.setItem('weather-app-date', JSON.stringify(date.substr(0, 15)));

  return (
    <DateStyle>
      {dateBuilder(new Date())}
    </DateStyle>
  )
}

export default DateLocation
