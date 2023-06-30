import React from "react";
import {NavLink} from "react-router-dom";

const Header=() => {
  const activeStyle={color: "rgb(103 216 236)"};
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
