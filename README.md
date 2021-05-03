# Weather-App

![Build Version](https://img.shields.io/badge/Build%20Version-v1.1alpha-red.svg?style=for-the-badge)

![Node Version](https://img.shields.io/badge/node.js-v14.14.0-339933?style=for-the-badge&logo=node.js)

![React Version](https://img.shields.io/badge/react.js-v17.0.1-61DAF8?style=for-the-badge&logo=react)

### Find the weather around the world!!

Type cities around the world and see the weather! Enjoy the various HD background images that give the feeling of the city's weather! It is a project made purely for fun & it is still under construction.

Visit the current deployed version [here](https://evening-fortress-20708.herokuapp.com/)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

## Prerequisites

1. You need to install [node.js](https://nodejs.org/en/) 14.14.0 or a later LTS release which comes with npm which comes with npm 6.14.4 or later.

2. You need to go to the [OpenWeather API](https://openweathermap.org/), register and request an API Key. Create an .env file and insert the following environmental variable:

```javascript
REACT_APP_WEATHER_API_KEY=/* Your_API_key */
```

3. You need to activate the Google Places API & Google Geolocation API. Insert the Google API key in the following environmental variable:

```javascript
REACT_APP_GOOGLE_API_KEY=/* Your_Google_API_key */
```

4. You need an Google Analytics tracking code ID which should be included in the following environmental variable:

```javascript
REACT_APP_GA_TRACKING_CODE=/* Your_Google_Analytics_Tracking_Code */
```

5. You need an Google Search Console which should be included in the following environmental variable:

```javascript
REACT_APP_GOOGLE_ORGANIC_RANK_ID=/* Your_Google_ownership_verification_code */
```

## Installing

Open the project in your editor and run

```
$ npm install
```

## Deployment

To run the development version ( localhost:3000 ):

```
$ npm start
```

# Dependencies

- "bootstrap": "^4.6.0",
- "dotenv": "^8.2.0",
- "react": "^17.0.1",
- "react-dom": "^17.0.1",
- "react-scripts": "4.0.3",
- "styled-components": "^5.2.1",
- "web-vitals": "^1.0.1"

## API

This project is using the following APIs:

- [OpenWeather API](https://openweathermap.org/)
- [Google Places API](https://developers.google.com/maps/documentation/places/web-service/overview)
- [Google Geolocation API](https://developers.google.com/maps/documentation/geolocation/overview)

## Possible future TODO List

- [x] Show weather of the choosen city.
- [ ] Add forecast.
- [ ] Add relative domain.
- [ ] Add interactive city map.
- [ ] Configure CI/CD
