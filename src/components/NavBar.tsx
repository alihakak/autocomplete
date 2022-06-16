import React from "react";
import { NavLink } from "react-router-dom";

import "./styles.css";

export function NavBar(): JSX.Element {
  return (
    <nav className="navbar-container">
      <NavLink to="/home">Home</NavLink>
      <NavLink to="/users">Users</NavLink>
      <NavLink to="/about">About</NavLink>
    </nav>
  );
}

export default NavBar;
