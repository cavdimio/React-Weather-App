import React from 'react'
import WeatherBox from "./WeatherBox";
import { Container, Row, Col} from 'react-bootstrap';

/* Styling for div around the weather box */
const WeatherBoxStyle = {
  marginRight: "10%",
  marginLeft: "10%",
  position: "relative",
  display: "inline-block",
  margin: "0.3125rem auto",
  background: "rgba(255, 255, 255, 0.2)",
  borderRadius: "1rem",
  padding: "0 1.5625rem",
  boxShadow: "0.1875rem 0.375rem rgba(0, 0, 0, 0.2)"
}

const SingleDesktopTab = ( { temperature, typeOfWeather } ) => {
  return (
    <Container fluid={true}>
      <Row> 
        Time here
      </Row>
      <Row>
        <Col style={WeatherBoxStyle}>
          <WeatherBox temperature={temperature} typeOfWeather={typeOfWeather} />
        </Col>
        <Col></Col>
        <Col></Col>
      </Row> 
    </Container>      
  )
}

export default SingleDesktopTab
