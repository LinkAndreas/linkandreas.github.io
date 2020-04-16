import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/NavBar.css";

export default function NavBar() {
  return (
    <nav className="navBar">
      <NavLink
        exact
        className="navBar__link"
        activeClassName="navBar__link--active"
        to="/"
      >
        Articles
      </NavLink>
      <NavLink
        className="navBar__link"
        activeClassName="navBar__link--active"
        to="/timity"
      >
        Timity
      </NavLink>
      <NavLink
        className="navBar__link"
        activeClassName="navBar__link--active"
        to="/about"
      >
        About
      </NavLink>
    </nav>
  );
}
