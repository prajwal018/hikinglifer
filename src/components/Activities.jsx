import React from "react";
import { Container, Image } from "react-bootstrap";

import Header from "./Header";

const Activities = () => {
  return (
    <div
      className="bg-grey1
     text-white vh-100 position-relative overflow-hidden text-wrap"
    >
      <Container fluid className="h-100 position-relative">
        <div className="absolute z-0 top-0 left-0 w-full h-full object-cover hero-image-mid ">
          <div className="absolute z-0 top-0 left-0 w-full h-full object-cover activity-image-small ">
            <img
              src="/images/hero-image.jpg"
              alt="hero-image"
              className="absolute z-0 top-0 left-5 w-full h-full object-cover hero-image"
            />
          </div>
        </div>
        <div className="position-absolute w-100 h-100 d-flex flex-column justify-content-left py-20">
          <div className="text-left text-wrap text-overlay mx-10">
            <h1 className="text-oAccent font-weight-bold display-4 uppercase font-funky">
              Walking in the nature as a recreational activity
            </h1>
            <h2 className="font-weight-semibold uppercase display-6 mt-3">
              Activities
            </h2>

            <p className="font-weight-medium text-lg mt-3">
              Lorem ipsum dolor sit amet,
              <br /> consectetur adipisicing elit.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Activities;
