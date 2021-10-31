import React from "react";
import { Carousel } from "react-bootstrap";
import "./Banner.css";
const Banner = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <Carousel.Caption>
            <div className="banner_text">
              <h3>All you need to know about Traveling!!</h3>
              <h1>
                Luxury travel with no nightly <br /> rates, taxes, or fees
              </h1>
            </div>
          </Carousel.Caption>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/zHNxbHT/banner1.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/c2vTr0S/banner2.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <div className="banner_text">
              <h3>All you need to know about Traveling!!</h3>
              <h1>
                Luxury travel with no nightly <br /> rates, taxes, or fees
              </h1>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/Vpg4QFX/banner1.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <div className="banner_text">
              <h3>All you need to know about Traveling!!</h3>
              <h1>
                Luxury travel with no nightly <br /> rates, taxes, or fees
              </h1>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Banner;
