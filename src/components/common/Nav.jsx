import React from "react";
import { Link, NavLink } from "react-router-dom";

const Nav = (props) => {
  return (
    <div className="m-3">
      <ul className="nav nav-pills justify-content-center">
        <li className="nav-item">
          <NavLink to="/" exact className="nav-link">
            کارهای روزمره
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/about" className="nav-link">
            درباره ی سازنده
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
