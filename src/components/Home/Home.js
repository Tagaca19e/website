import React from "react";
import "./Home2.css";
import { Container, Row, Col } from "react-bootstrap";

import ME from "../../Assets/ME.gif";

import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section">
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hello There! <span className="wave"></span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> EIDMONE TAGACA</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }} className="ME">
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img src={ME} alt="home pic" className="img-fluid" />
            </Col>
          </Row>
        </Container>
      </Container>

      <Home2 />
    </section>
  );
}

export default Home;
