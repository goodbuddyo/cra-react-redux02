import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import img0 from '../img/5-5sStar400x246_c.png';
import img1 from '../img/tapemeasure01.png';
import img2 from '../img/5-5sIntegrateBiz03.png';
import img3 from '../img/dataLaptopIcon02.png';
import img4 from '../img/5-5sCityBlue400wx250.jpg';
import img5 from '../img/TaskList460_250.gif';


function HomeCarousel() {

  // fade
  return (
    <Carousel interval="2000000" className="my-carousel">
      <Carousel.Item>
        <img
          className="carousel-img"
          src={img0}
          alt="Welcome"
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
          alt="Step 1"
        />

        <Carousel.Caption>
          <h3>Step 1</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing, dolor sit amet,consectetur adipiscing elit amet.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block carousel-img"
          src={img2}
          alt="Step 2"
        />

        <Carousel.Caption>
          <h3>Step 2</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque dolor sit amet, nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>



      <Carousel.Item>
        <img
          className="d-block carousel-img"
          src={img3}
          alt="Step 3"
        />

        <Carousel.Caption>
          <h3>Step 3</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque dolor sit amet, nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>


      <Carousel.Item>
        <img
          className="d-block carousel-img"
          src={img4}
          alt="Step 4"
        />

        <Carousel.Caption>
          <h3>Step 4</h3>
          <p>
            Sit praesent commodo cursus magna, vel scelerisque dolor sit amet, nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>


      <Carousel.Item>
        <img
          className="d-block carousel-img"
          src={img5}
          alt="Step 5"
        />

        <Carousel.Caption>
          <h3>Step 5</h3>
          <p>
            Commodo cursus magna, praesent vel scelerisque dolor sit dolor sit amet, nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default HomeCarousel;