import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import {Link} from "react-router-dom";
import img0 from '../img/5-5sStar400x246_c.png';
import img1 from '../img/tapemeasure01.png';
import img2 from '../img/5-5sIntegrateBiz03.png';
import img3 from '../img/dataLaptopIcon02.png';
import img4 from '../img/5-5sCityBlue400wx250.jpg';
import img5 from '../img/TaskList460_250.gif';


function HomeCarousel() {

  // fade
  return (
    <Carousel interval="11000" fade className="my-carousel">
      <Carousel.Item>
        <img
          className="carousel-img"
          src={img0}
          alt="Welcome"
        />
        <Carousel.Caption>
          <h3>Welcome to 5-5s.com</h3>
          <p>A 5 step process for web developers, designers, project managers and their teams. &nbsp;
            <Link to="/about" className="mycarousel-link" >
              Learn more
            </Link>

          </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block carousel-img"
          src={img1}
          alt="Step 1"
        />

        <Carousel.Caption>
          <h3>Step 1: Assess</h3>
          <p>Review user feedback, performance data & business needs. Identify 1 - 3 topics to address. &nbsp;
            <Link to="/about" className="mycarousel-link" >
              Learn more
            </Link>
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block carousel-img"
          src={img2}
          alt="Step 2"
        />

        <Carousel.Caption>
          <h3>Step 2: Research</h3>
          <p>
            Understand industry standards, costs and benefits with each topic to insure adequate ROI. &nbsp;

            <Link to="/about" className="mycarousel-link" >
              Learn more
            </Link>
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
          <h3>Step 3: Summarize</h3>
          <p>
            Outline key research discoveries to help pitch proposals and for documentation.&nbsp;
            <Link to="/about" className="mycarousel-link" >
              Learn more
            </Link>
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
          <h3>Step 4: Plan & Execute</h3>
          <p>
            Create a project plan, specify requirements, schedule deadlines, execute the plan. &nbsp;
            <Link to="/about" className="mycarousel-link" >
              Learn more
            </Link>
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
          <h3>Step 5: Document & Repeat</h3>
          <p>
            Record results, advertise successes, lay the groundwork for the next 5 step process. &nbsp;
            <Link to="/about" className="mycarousel-link" >
              Learn more
            </Link>
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default HomeCarousel;