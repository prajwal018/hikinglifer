import React from "react";
import { Image, Button, Container, Col, Row } from "react-bootstrap";

const Park = () => {
  return (
    <div className="position-relative">
      <Image
        src="/images/hiking.jpg"
        alt="mountaineering"
        className="w-100 h-96 object-cover"
        style={{ filter: "brightness(50%)" }}
      />
      <div className="position-absolute start-0 top-50 translate-middle-y ms-md-5">
        <Container>
          <Row className="text-white text-start pl-10">
            <Col xs={12} md={12} lg={12} className="ms-md-5">
              <div className="mb-4 text-4xl">
                <h1 className="font-funky fw-extrabold text-uppercase mb-0">
                  Big Bend National Park
                </h1>
                <h1 className="font-funky fw-extrabold text-uppercase mb-0">
                  Hiking Guide
                </h1>
              </div>
              <div className="mb-4">
                <h3 className="fw-semibold text-uppercase mb-0">
                  This hike is the next best
                </h3>
                <h3 className="fw-semibold text-uppercase mb-0">option.</h3>
              </div>
              <div className="mb-4">
                <p className="fw-medium text-uppercase mb-0">Lorem ipsum</p>
              </div>
              <div>
                <Button
                  variant="outline-light"
                  className="px-4 py-2 text-uppercase fw-medium"
                >
                  See More
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Park;
