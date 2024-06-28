import React from "react";
import Indicator from "./Indicator";
import { Container, Row, Col, Image } from "react-bootstrap";

const HikingAndCamping = () => {
  return (
    <Container className="py-4">
      <Row>
        <Col>
          <h1 className="text-black font-sans font-regular text-2xl text-uppercase">
            hiking and camping <br />
            <span className="font-sans font-semibold">classes</span>
          </h1>
          <div className="my-3">
            <Indicator />
          </div>
        </Col>
      </Row>
      <Row className="my-4 justify-content-between">
        <Col className="d-flex flex-column align-items-center text-center">
          <Image
            src="/images/activities-icon.png"
            alt="activities"
            roundedCircle
            className="size-28 bg-grey1"
            style={{ width: "112px", height: "112px" }} // size-28 in Tailwind is 112px
          />
          <h3 className="text-uppercase font-sans font-semibold text-lg mt-3">
            activities
          </h3>
          <p className="text-black opacity-70 font-sans font-medium text-lg">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Perferendis accusantium atque laborum quia dicta.
          </p>
        </Col>
        <Col className="d-flex flex-column align-items-center text-center">
          <Image
            src="/images/hiking-icon.png"
            alt="hiking"
            roundedCircle
            className="size-28 bg-grey1"
            style={{ width: "112px", height: "112px" }}
          />
          <h3 className="text-uppercase font-sans font-semibold text-lg mt-3">
            hiking
          </h3>
          <p className="text-black opacity-70 font-sans font-medium text-lg">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Perferendis accusantium atque laborum quia dicta.
          </p>
        </Col>
        <Col className="d-flex flex-column align-items-center text-center">
          <Image
            src="/images/mountains-icon.png"
            alt="mountains"
            roundedCircle
            className="size-28 bg-grey1"
            style={{ width: "112px", height: "112px" }}
          />
          <h3 className="text-uppercase font-sans font-semibold text-lg mt-3">
            mountains
          </h3>
          <p className="text-black opacity-70 font-sans font-medium text-lg">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Perferendis accusantium atque laborum quia dicta.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default HikingAndCamping;
