import React from "react";
import {Link} from "react-router-dom";
import HomeCarousel from "./HomeCarousel";
//import homelogo from '../img/5-5sLogo05b.png';

const HomePage=() => (
  <>
    <HomeCarousel />
    <section className="mybody-section home-body">

      {/*<h3 className="home-h3" >Great websites don't just happen,...</h3>
      <p className="home-p">...they require long hours of planning, development and testing. After launch, regular updates and maintenance are needed.  </p>*/}

      {/*<ControlledCarousel />*/}


      <p className="home-p">In addition to building new applications, most web development teams are tasked with updating and maintening existing applications. Savy users are quick to recognize poorly maintained websites. Only well maintained sites get 5 star ratings.</p>
      {/*  <img
      className="mybodylogo-img"
      src={homelogo}
      alt="5-5s.com"
    /> */}

      <p className="home-p">
        <img
          className="myheader-img"
          src={'../../../static/img/5-5sLogo05b.png'}
          alt="5-5s.com "
        /> &nbsp;
        offers a 5 step process that can help web development teams work toward 5 star raitings by being proactive about application maintenance.</p>

      <Link to="topics" className="btn btn-mybutton btn-lg">
        Learn more
      </Link>
    </section>
  </>
);

export default HomePage;
