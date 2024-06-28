import React from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";

const ThreeDots = () => {
  return (
    <div className="d-flex flex-column gap-1">
      <div className="size-1 bg-lAccent rounded-full"></div>
      <div className="size-1 bg-lAccent rounded-full"></div>
      <div className="size-1 bg-lAccent rounded-full"></div>
    </div>
  );
};
const PlacesToVisit = () => {
  return (
    <Container className="py-5">
      <h1 className="text-left text-2xl font-bold text-uppercase mb-5">
        Places to visit
        <br />
        in autumn
      </h1>
      <Row className="text-left mb-5">
        <Col md={4} className="position-relative mb-5 mb-md-0 mx-auto">
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2">
            <ThreeDots />
          </div>
          <Image
            src="/images/mountains.jpg"
            alt="mountains"
            roundedCircle
            fluid
            className="size-60 mb-4 object-cover mx-auto"
          />
          <h2 className="h4 font-weight-bold text-capitalize">Mountain Loop</h2>
          <p className="text-muted line-clamp-2 mb-3">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet rerum
            minima unde architecto temporibus repudiandae eum explicabo, eius
            laudantium iusto, similique quaerat reprehenderit voluptate ea esse
            dolorem numquam? Maiores, corrupti.
          </p>
          <hr className="bg-primary my-3" />
          <div className="d-flex justify-content-left align-items-left">
            <h3 className="h5 font-weight-bold me-2">Location</h3>
            <h4 className="h5 text-muted">0.3 miles</h4>
          </div>
        </Col>
        <Col md={4} className="position-relative mb-5 mb-md-0 mx-auto">
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2">
            <ThreeDots />
          </div>
          <Image
            src="/images/national-park.jpg"
            alt="national-park"
            roundedCircle
            fluid
            className="size-60 mb-4 object-cover mx-auto"
          />
          <h2 className="h4 font-weight-bold text-capitalize">National Park</h2>
          <p className="text-muted line-clamp-2 mb-3">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet rerum
            minima unde architecto temporibus repudiandae eum explicabo, eius
            laudantium iusto, similique quaerat reprehenderit voluptate ea esse
            dolorem numquam? Maiores, corrupti.
          </p>
          <hr className="bg-primary my-3" />
          <div className="d-flex justify-content-left align-items-left">
            <h3 className="h5 font-weight-bold me-2">Location</h3>
            <h4 className="h5 text-muted">0.3 miles</h4>
          </div>
        </Col>
        <Col md={4} className="position-relative mx-auto">
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2">
            <ThreeDots />
          </div>
          <Image
            src="/images/canyon.jpg"
            alt="canyon"
            roundedCircle
            fluid
            className="size-60 mb-4 object-cover mx-auto"
          />
          <h2 className="h4 font-weight-bold text-capitalize">Canyon Trail</h2>
          <p className="text-muted line-clamp-2 mb-3">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet rerum
            minima unde architecto temporibus repudiandae eum explicabo, eius
            laudantium iusto, similique quaerat reprehenderit voluptate ea esse
            dolorem numquam? Maiores, corrupti.
          </p>
          <hr className="bg-primary my-3" />
          <div className="d-flex justify-content-left align-items-left">
            <h3 className="h5 font-weight-bold me-2">Location</h3>
            <h4 className="h5 text-muted">0.3 miles</h4>
          </div>
        </Col>
      </Row>
      <div className="p-2 flex justify-center items-center ">
        <button className="px-16 py-1 border-2 rounded-sm border-lAccent text-dark font-sans font-medium m-auto">
          see more
        </button>
      </div>
    </Container>
  );
};

export default PlacesToVisit;
