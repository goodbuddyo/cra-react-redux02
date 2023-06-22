import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import img0 from '../img/5-5sStar400x246_c.png';
import img1 from '../img/tapemeasure01.png';
import img2 from '../img/5-5sIntegrateBiz03.png';


function HomeCarousel() {

  // fade
  return (
    <Carousel interval="2000000" className="my-carousel">
      <Carousel.Item>
        <img
          className="carousel-img"
          src={img0}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Welcome to 5-5s.com</h3>
          <p>An online tool for web developers, designers, project managers and their teams.</p>
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
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing, dolor sit amet,consectetur adipiscing elit amet.</p>
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
            Praesent commodo cursus magna, vel scelerisque dolor sit amet, nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default HomeCarousel;