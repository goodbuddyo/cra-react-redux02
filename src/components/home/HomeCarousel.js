import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import img0 from './img/5-5sStar400x246_c.png';
import img1 from './img/tapemeasure01.png';
import img2 from './img/5-5sIntegrateBiz03.png';


function HomeCarousel() {

  // fade
  return (
    <Carousel interval="900000000" className="my-carousel">
      <Carousel.Item>
        <img
          className="d-block carousel-img"
          src={img0}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block carousel-img"
          src={img1}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block carousel-img"
          src={img2}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default HomeCarousel;