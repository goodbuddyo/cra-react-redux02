import React from "react";
import {Link} from "react-router-dom";
import HomeCarousel from "./HomeCarousel";

const HomePage=() => (
  <div className="">

    <HomeCarousel />

    <h2>Great websites don't just happen.</h2>
    <Link to="about" className="btn btn-primary btn-lg">
      Learn more
    </Link>
  </div>
);

export default HomePage;
