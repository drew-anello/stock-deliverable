import React from "react";
import { Link } from "react-router-dom";

const Nav = (props) => {
  return (
    <div className="nav">
      <Link to="/">
        <div>Home Page</div>
      </Link>
      <Link to="/about">
        <div>About</div>
      </Link>
      <Link to="/stock/symbol">
        <div>Dashboard</div>
      </Link>
    </div>
  );
};

export default Nav;