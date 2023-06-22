

import React from "react";
import {NavLink} from "react-router-dom";
import {Link} from "react-router-dom";
import homelogo from '../img/5-5sLogo05b.png';


const Header=(props) => {
  return (
    <nav className="my-nav">

      <Link to="/" className="myheader-imglink" >
        <img
          className="myheader-img"
          src={homelogo}
          alt="First slide"
        />
      </Link>
      {" | "}
      <NavLink to="/topics" className={(navData) => (navData.isActive? 'active':'link')}>
        Topics
      </NavLink>
      {" | "}
      <NavLink to="/about" className={(navData) => (navData.isActive? 'active':'link')}>
        About
      </NavLink>
    </nav>
  );
};

export default Header;
