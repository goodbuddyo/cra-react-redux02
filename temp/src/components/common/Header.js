import React from "react";
import {NavLink} from "react-router-dom";

const Header=() => {
  const activeStyle={color: "#ffffff"};
  return (
    <nav className="my-nav">
      <NavLink to="/" activeStyle={activeStyle} exact>
        <img
          className="myheader-img"
          src={'../../../static/img/5-5sLogo05b.png'}
          alt="5-5s.com"
        />
      </NavLink>
      <span className="menu-divider">  |  </span>
      <NavLink to="/topics" activeStyle={activeStyle}>
        Step 1
      </NavLink>
      <span className="menu-divider">  |  </span>
      <NavLink to="/research" activeStyle={activeStyle}>
        2
      </NavLink>
      <span className="menu-divider">  |  </span>
      <NavLink to="/summarize" activeStyle={activeStyle}>
        3
      </NavLink>
      <span className="menu-divider">  |  </span>
      <NavLink to="/planExecute" activeStyle={activeStyle}>
        4
      </NavLink>
      <span className="menu-divider">  |  </span>
      <NavLink to="/documentRepeat" activeStyle={activeStyle}>
        5
      </NavLink>
      <span className="menu-divider">  |  </span>
      <NavLink to="/about" activeStyle={activeStyle}>
        About
      </NavLink>
    </nav>
  );
};

export default Header;
