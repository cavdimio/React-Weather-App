//import PropTypes from 'prop-types';
import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import WeatherBox from "./WeatherBox";
import React, { useState } from "react";
import { CONFIG } from "../utils/config";

const DesktopTab = ( { windowWidth, temperature, typeOfWeather }) => {
    const [key, setKey] = useState(CONFIG.DAYS[0].name);

    const inActiveStyle = {
        fontSize: "29px",
        fontWeight: "400",
        textAlign: "center",
        color: "rgb(230, 230, 230)",
        backgroundColor: "inherit",
        textShadow: "3px 3px rgba(50, 50, 70, 0.8)",
        border: "none"
    };
    const ActiveStyle = {
        ...inActiveStyle,
        fontSize: "31px",
        fontWeight: "850",
        color: "rgb(240, 240, 240)",
        borderBottom: "4px solid white"
    };

    const bigScreenContainer = {
      maxWidth: "80%"
    };

    const desktopContainer = {
      maxWidth: "100%"
    }

    const lineStyle = { 
      height: "0px", 
      backgroundColor: "white", 
      marginTop: 0, 
      marginBottom: 0
    };

    return (
      
      <div className="App">
      {console.log(windowWidth)}
        { windowWidth > CONFIG.SCREENSIZE[4].WIDTH.MAX ? 
          <Container style={ windowWidth > CONFIG.SCREENSIZE[0].WIDTH.MIN ? bigScreenContainer : desktopContainer }>
            <Tab.Container activeKey={key} onSelect={key => setKey(key)}>
              <Row>   
                {CONFIG.DAYS.map((day) => 
                  <Col>
                      <Nav.Link eventKey={day.name} style={ key === day.name ? ActiveStyle : inActiveStyle}>
                      {day.name} <br /> {day.date}
                      </Nav.Link>
                    </Col>
                  )
                }
              </Row>
              <hr style= {lineStyle} />
              <Tab.Content>
                {CONFIG.DAYS.map((day) => 
                  <Tab.Pane eventKey= {day.name} >
                    <Row style={{ height: "90vh" }}>
                        <WeatherBox temperature={temperature} typeOfWeather={typeOfWeather} />
                    </Row>
                  </Tab.Pane>
                  )
                }
                </Tab.Content>
              </Tab.Container>
            </Container>
        : <WeatherBox temperature={temperature} typeOfWeather={typeOfWeather} />}  
      </div>
    )
}

export default DesktopTab
