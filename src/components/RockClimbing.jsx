import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

const RockClimbing = () => {
  return (
    <Container className="my-5 text-xl">
      <Row className="mx-auto">
        <Col md={6}>
          <h1 className="text-2xl font-bold text-uppercase">
            Rock <br />
            Climbing
          </h1>
          <div className="my-4 d-flex flex-column justify-content-center align-items-start gap-3">
            <h3 className="text-uppercase">1. Classes & events</h3>
            <p className="text-muted">
              Hatha is the most classic yoga. Its <br /> origin is in the Raya
              Yoga of Patanjali <br /> and classical texts such as <br />
              Bhagavad Gita and Hatha Yoga <br />
              Pradipika.
            </p>
            <div className="w-full h-1 bg-lAccent rounded-sm"></div>{" "}
            <h3 className="text-muted">
              10 modules
              <br /> divided into 7 weekends
            </h3>
            <div className="d-flex gap-5">
              <p className="text-dark">
                Start
                <br /> April 15 <br />
                20:00 hr
              </p>
              <p className="text-dark">
                Price
                <br />
                $900
              </p>
            </div>
          </div>
        </Col>
        <Col
          md={6}
          className="d-flex flex-column justify-content-center align-items-center"
        >
          <Image
            src="/images/rock-climber.jpg"
            alt="rock-climber"
            roundedCircle
            className="size-80 object-cover object-center rounded-full mb-4"
          />
          <p className="text-oAccent font-funky font-semibold text-uppercase">
            walking in the nature
            <br />
            as a recreational
            <br />
            activity
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default RockClimbing;
