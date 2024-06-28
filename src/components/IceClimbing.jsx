import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import Indicator from "./Indicator";
const IceClimbing = () => {
  return (
    <div
      className="bg-grey1
     text-white p-10"
    >
      <Container className=" text-xl">
        <Row className="mx-auto">
          <Col
            md={6}
            className="d-flex flex-column justify-content-center align-items-center p-5"
          >
            <Image
              src="/images/hiker.jpg"
              alt="hiker"
              roundedCircle
              className="size-80 object-cover object-center rounded-full mb-4"
            />
            <p className="text-lAccent font-funky font-semibold text-uppercase">
              walking in the nature
              <br />
              as a recreational
              <br />
              activity
            </p>
          </Col>
          <Col md={6} className="p-5">
            <h1 className="text-2xl font-bold text-uppercase">
              Mountaineering
              <br />
              Ice Climbing
            </h1>
            <div className="my-4 d-flex flex-column justify-content-center align-items-start gap-3">
              <h3 className="text-uppercase">2. Activities</h3>
              <p className="text-light">
                Kundalini is the most classic yoga. Its <br />
                origin is in the Raya Yoga of Patanjali
                <br /> and classical texts such as
                <br /> Bhagavad Gita and Hatha Yoga
                <br /> Pradipika
              </p>
              <div className="w-full h-1 bg-lAccent rounded-sm"></div>{" "}
              <h3 className="text-light">
                17 modules
                <br /> divided into 5 weekends
              </h3>
              <div className="d-flex gap-5">
                <p className="text-light">
                  Start
                  <br /> April 15 <br />
                  20:00 hr
                </p>
                <p className="text-light">
                  Price
                  <br />
                  $900
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default IceClimbing;
