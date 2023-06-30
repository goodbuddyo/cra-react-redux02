import React from "react";
import {NavLink} from "react-router-dom";

const Header=() => {
  const activeStyle={color: "#F15B2A"};
  return (
    <nav className="my-nav">
      <NavLink to="/" activeStyle={activeStyle} exact>
        Home
      </NavLink>
      {" | "}
      <NavLink to="/topics" activeStyle={activeStyle}>
        Topics
      </NavLink>
      {" | "}
      <NavLink to="/about" activeStyle={activeStyle}>
        About
      </NavLink>
    </nav>
  );
};

export default Header;
