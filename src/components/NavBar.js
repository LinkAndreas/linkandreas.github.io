import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/NavBar.css";

export default function NavBar() {
  return (
    <nav className="navBar">
      <NavLink className="navBar__link" to="/">
        Articles
      </NavLink>
      <NavLink className="navBar__link" to="/timity">
        Timity
      </NavLink>
      <NavLink className="navBar__link" to="/about">
        About
      </NavLink>
    </nav>
  );
}
