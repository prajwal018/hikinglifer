import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="py-5 border-bottom">
      <Container>
        <Row className="g-4">
          <Col md={6}>
            <div>
              <h3 className="text-uppercase text-xl fw-semibold">About</h3>
              <p className="text-muted fw-medium fs-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
                quam reiciendis aliquid totam eaque at ullam ratione enim
                aspernatur, ut voluptas.
              </p>
              <div className="d-flex align-items-center gap-3">
                <Image
                  src="/images/mountain.svg"
                  alt="logo"
                  width={40}
                  height={40}
                  className="img-fluid"
                />
                <h3 className="text-lAccent text-capitalize fs-3">
                  Hiking<span className="fw-bold">Life</span>
                </h3>
              </div>
            </div>
          </Col>
          <Col md={6}>
            <Row>
              <Col xs={4}>
                <div>
                  <h3 className="text-uppercase text-xl fw-semibold">About</h3>
                  <ul className="list-unstyled">
                    <li className="text-capitalize fs-5 fw-medium text-muted">
                      Team
                    </li>
                    <li className="text-capitalize fs-5 fw-medium text-muted">
                      Join Us
                    </li>
                    <li className="text-capitalize fs-5 fw-medium text-muted">
                      Ethics
                    </li>
                    <li className="text-capitalize fs-5 fw-medium text-muted">
                      Goals
                    </li>
                  </ul>
                </div>
              </Col>
              <Col xs={4}>
                <div>
                  <h3 className="text-uppercase text-xl fw-semibold">
                    Services
                  </h3>
                  <ul className="list-unstyled">
                    <li className="text-capitalize fs-5 fw-medium text-muted">
                      Guides
                    </li>
                    <li className="text-capitalize fs-5 fw-medium text-muted">
                      Trips
                    </li>
                    <li className="text-capitalize fs-5 fw-medium text-muted">
                      Support
                    </li>
                    <li className="text-capitalize fs-5 fw-medium text-muted">
                      Contact
                    </li>
                  </ul>
                </div>
              </Col>
              <Col xs={4}>
                <div>
                  <h3 className="text-uppercase text-xl fw-semibold">
                    Resources
                  </h3>
                  <ul className="list-unstyled">
                    <li className="text-capitalize fs-5 fw-medium text-muted">
                      Blog
                    </li>
                    <li className="text-capitalize fs-5 fw-medium text-muted">
                      FAQs
                    </li>
                    <li className="text-capitalize fs-5 fw-medium text-muted">
                      Support
                    </li>
                    <li className="text-capitalize fs-5 fw-medium text-muted">
                      Contact
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
