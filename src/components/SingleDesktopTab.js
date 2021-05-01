import React from 'react'
import WeatherBox from "./WeatherBox";
import { Container, Row, Col} from 'react-bootstrap';

/* Styling for div around the weather box */
const WeatherBoxStyle = {
  marginRight: "10%",
  marginLeft: "10%",
  position: "relative",
  display: "inline-block",
  margin: "5px auto",
  background: "rgba(255, 255, 255, 0.2)",
  borderRadius: "16px",
  padding: "0px 25px",
  boxShadow: "3px 6px rgba(0, 0, 0, 0.2)"
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
