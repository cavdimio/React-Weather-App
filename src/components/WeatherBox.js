/* Component that constructs the weather box */
import { CONFIG } from "../utils/config";
import { Container, Row, Col} from 'react-bootstrap';
import cloud from "../assets/download.png";

const temperatureStyle = {
  color: "white",
  fontSize: "9rem",
  fontWeight: "100",
  lineHeight: "8.75rem"
}

const celciusStyle = {
  color: "white",
  fontSize: "3.3rem",
  verticalAlign: "text-top",
}

const feelsLikeStyle = {
  color: "white",
  fontSize: "1.4rem",
  paddingLeft: "1.25rem",
  fontWeight: "500",
}

const descriptionStyle = {
  color: "white",
  fontSize: "1.4rem",
  textAlign: "center",
  fontWeight: "500",
  paddingBottom: "1.5625rem"
}

const photo = {
  display: "block",
  marginTop: "20%",
  marginLeft: "auto",
  marginRight: "auto",
  height: "6rem",
  width: "12rem", 
}

/* Weather box component */
const WeatherBox = () => {
    return (
      <Container fluid={true}>
        <Row>
          <Col style={temperatureStyle}>
            {CONFIG.WEATHERSTATS.temperature}
            <span style={celciusStyle}>°C</span>
          </Col>
          <Col>
            <Row>
              <img src={cloud} alt="Cloud" style={photo} />
            </Row>
          </Col>
        </Row>
        <Row>
          <Col style={feelsLikeStyle}>
            Feels like {CONFIG.WEATHERSTATS.feels_like}°C
          </Col>
          <Col style={descriptionStyle}>
            {CONFIG.WEATHERSTATS.description}
          </Col>
        </Row>
          {/* <span> Pressure: {CONFIG.WEATHERSTATS.pressure} </span> */}
          
      </Container>
    )
}

export default WeatherBox
