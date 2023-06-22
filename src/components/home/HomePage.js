import React from "react";
import {Link} from "react-router-dom";
import HomeCarousel from "./HomeCarousel";

const HomePage=() => (
  <>

    <HomeCarousel />
    <section className="myintro-section">

      <h3 className="home-h3" >Great websites don't just happen,...</h3>
      <p className="home-p">...they require long hours of planning, development and testing. After launch, regular updates and maintenance are needed.  </p>

      <p className="home-p">For some developers, updates and maintenance are considered part of their ongoing workload, in addition to ongoing new development projects. If you are a web developer looking for a tool to help with that, you've come to the right place.  </p>

      <p className="home-p"> Welcome to 5-5s.com, and the 5 steps to 5 star websites.  </p>
      <Link to="about" className="btn btn-primary btn-lg">
        Learn more
      </Link>
    </section>
  </>
);

export default HomePage;
