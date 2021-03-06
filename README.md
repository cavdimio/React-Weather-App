# Weather-App

![Build Version](https://img.shields.io/badge/Build%20Version-v1.0alpha-red.svg?style=for-the-badge)

![Node Version](https://img.shields.io/badge/node.js-v14.14.0-339933?style=for-the-badge&logo=node.js)

![React Version](https://img.shields.io/badge/react.js-v17.0.1-61DAF8?style=for-the-badge&logo=react)

### Find the weather around the world!!

Type cities around the world and see the weather! Enjoy the various HD background images that give the feeling of the city's weather! It is a project made purely for fun & it is still under construction.

Visit the current version [here](https://thawing-caverns-80697.herokuapp.com/)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

## Prerequisites

You need to install [node.js](https://nodejs.org/en/) 14.14.0 or a later LTS release which comes with npm which comes with npm 6.14.4 or later.

You need to go to the [OpenWeather API](https://openweathermap.org/), register and request an API Key. Create an .env file and insert the following environmental variable:

```javascript
REACT_APP_WEATHER_API_KEY=/* Your_API_key */
```

## Installing

Open the project in your editor and run

```
$ npm install
```

## Deployment

To run the build version ( localhost:5000 ):

```
$ serve -s build
```

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

The [OpenWeather API](https://openweathermap.org/) is being used in this project.

## Possible future TODO List

- [x] Show weather of the choosen city.
- [ ] Show more than one cities.
- [ ] Show more weather statistics.
- [ ] User could be able to choose the weather statistics he wants.
