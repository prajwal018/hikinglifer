import React from "react";
import { Container, Row, Col, Button, Image } from "react-bootstrap";

const TheAsanas = () => {
  return (
    <div className="relative">
      <img
        src="/images/hiking.jpg"
        alt="mountaineering"
        className="w-full h-96 object-cover brightness-50 "
      />
      <Container className="position-absolute top-50 start-50 translate-middle text-center d-flex flex-column align-items-center justify-content-center">
        <h1 className="font-funky text-white text-uppercase font-weight-bold display-6">
          the asanas purify our body and
          <br /> keep it healthy, making it <br />
          suitable vehicle for our soul.
        </h1>
        <div className="d-flex justify-content-center align-items-center mt-2">
          <Image
            src="/images/mountain.svg"
            alt="logo"
            className="img-fluid"
            style={{ width: "100px", height: "100px" }}
          />
        </div>
        <div className="p-2 flex justify-center items-center ">
          <button className="px-16 py-1 border-2 rounded-sm border-lAccent text-light font-sans font-medium m-auto">
            see more
          </button>
        </div>
      </Container>
    </div>
  );
};

export default TheAsanas;
