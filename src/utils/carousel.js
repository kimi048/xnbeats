import React from "react";
import { Carousel, CarouselItem } from "react-bootstrap";

const CarouselWidget = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/SLIDE-1.jpg"
          alt="first slide"
        />
        <Carousel.Caption>
          <h3>first slide</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam id
            felis hendrerit, elementum turpis at, aliquam libero.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/SLIDE-2.jpg"
          alt="second slide"
        />
        <Carousel.Caption>
          <h3>second slide</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam id
            felis hendrerit, elementum turpis at, aliquam libero.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselWidget;
