

import React from "react";
import {NavLink} from "react-router-dom";

const Header=(props) => {
  return (
    <nav className="my-nav">

      <NavLink to="/" className={(navData) => (navData.isActive? 'active':'link')}>
        Home
      </NavLink>
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
