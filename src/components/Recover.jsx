import React from "react";
import { Row, Col, Image } from "react-bootstrap";
import Indicator from "./Indicator";

const Recover = () => {
  return (
    <Row className="px-20 py-10">
      <Col
        md={6}
        className="d-flex flex-column justify-content-between gap-6 mx-auto"
      >
        <h1 className="text-black font-sans font-regular text-2xl font-bold text-uppercase">
          How to recover from <br />a hike
        </h1>
        <Indicator />
        <Row className="d-flex justify-content-right mx-auto">
          <Col md={4} className="d-flex justify-content-center">
            <Image
              src="/images/activities-icon.png"
              alt="activities"
              className="size-32 rounded-circle bg-grey1"
            />
          </Col>
          <Col md={8} className="text-left my-auto">
            <p className="text-black opacity-70 font-sans font-medium my-auto ">
              - Lorem, ipsum dolor sit <br />- Amet consectetur adipisicing
              elit. <br />- Perferendis accusantium atque. <br /> - Laborum quia
              dicta.
            </p>
          </Col>
        </Row>
        <Row className="d-flex justify-content-right mx-auto">
          <Col md={4} className="d-flex justify-content-center ">
            <Image
              src="/images/hiking-icon.png"
              alt="hiking"
              className="size-32 rounded-circle bg-grey1"
            />
          </Col>
          <Col md={8} className="text-left my-auto">
            <p className="text-black opacity-70 font-sans font-medium my-auto ">
              - Lorem, ipsum dolor sit <br />- Amet consectetur adipisicing
              elit. <br />- Perferendis accusantium atque. <br /> - Laborum quia
              dicta.
            </p>
          </Col>
        </Row>
        <Row className="d-flex justify-content-right mx-auto">
          <Col md={4} className="d-flex justify-content-center ">
            <Image
              src="/images/mountains-icon.png"
              alt="mountains"
              className="size-32 rounded-circle bg-grey1"
            />
          </Col>
          <Col md={8} className="text-left my-auto">
            <p className="text-black opacity-70 font-sans font-medium my-auto ">
              - Lorem, ipsum dolor sit <br />- Amet consectetur adipisicing
              elit. <br />- Perferendis accusantium atque. <br /> - Laborum quia
              dicta.
            </p>
          </Col>
        </Row>
      </Col>
      <Col
        md={6}
        className="d-flex flex-column justify-content-center align-items-center text-center pt-20 mx-auto"
      >
        <Image
          src="/images/recover.jpg"
          alt="recover"
          className="size-80 my-10 rounded-circle"
          fluid
        />
        <p className="text-lAccent font-funky font-semibold text-3xl text-left uppercase">
          make sure your
          <br />
          gear fits
        </p>
      </Col>
    </Row>
  );
};

export default Recover;
